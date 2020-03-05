import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Items} from 'src/app/Models/items';
import { combineLatest } from 'rxjs';
import { SellerService } from 'src/app/Services/seller.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  RegisterForm4:FormGroup;
  submitted=false;
  items:Items;
  list:Items[];
  clist:Category[];
  sclist:SubCategory[];
  cid:string;
  imagename:string;
  selectedFile : File = null;
  constructor(private formBuilder:FormBuilder,private service:SellerService,private route:Router) { 
    this.service.GetCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
  }
  ngOnInit() {
    this.RegisterForm4=this.formBuilder.group({
      categoryId:['',Validators.required],
      subcategoryId:['',Validators.required],
      itemName:['',Validators.required],
      price:['',[Validators.required,Validators.pattern('^[0-9]{1,8}$')]],
      description:['',Validators.required],
      stockNumber:['',[Validators.required,Validators.pattern('^[0-9]{1,7}$')]],
      remarks:['',Validators.required]
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm4.valid)
      {
        let sid=localStorage.getItem('sellerid')
        this.items=new Items();
        this.items.id='I'+Math.round(Math.random()*1000);
        this.items.categoryId=this.RegisterForm4.value["categoryId"];
        this.items.subcategoryId=this.RegisterForm4.value["subcategoryId"];
        this.items.sellerid=sid;
        this.items.itemName=this.RegisterForm4.value["itemName"];
        this.items.price=this.RegisterForm4.value["price"];
        this.items.description=this.RegisterForm4.value["description"];
        this.items.stockNumber=this.RegisterForm4.value["stockNumber"];
        this.items.remarks=this.RegisterForm4.value["remarks"];
        this.items.imagename=this.imagename;
        console.log(this.items);
        this.service.AddItems(this.items).subscribe(res=>{
          console.log(this.items);
        }
        ,err=>{
        console.log(err);
        })
      }
  }
  fileEvent(event){
    this.imagename = event.target.files[0].name;
  }
  // Search()
  // {
  //   let id1=this.RegisterForm4.value["id"];
  //   console.log(id1);
  //   this.service.GetItem(id1).subscribe(res=>{
  //     this.items=res;
  //     console.log(this.items);
  //     this.RegisterForm4.setValue({
  //       categoryId:this.items.categoryId,
  //       subcategoryId:this.items.subcategoryId,
  //       sellerid:this.items.sellerid,
  //       itemName:this.items.itemName,
  //       price:this.items.price,
  //       description:this.items.description,
  //       stockNumber:this.items.stockNumber,
  //       remarks:this.items.remarks
  //     })
  //   })
  // }
  // Update()
  // {
  //   this.items=new Items();
  //   this.items.id=this.RegisterForm4.value["id"];
  //   this.items.categoryId=this.RegisterForm4.value["categoryId"];
  //   this.items.subcategoryId=this.RegisterForm4.value["subcategoryId"];
  //   this.items.sellerid=this.RegisterForm4.value["sellerid"];
  //   this.items.itemName=this.RegisterForm4.value["itemName"];
  //   this.items.price=this.RegisterForm4.value["price"];
  //   this.items.description=this.RegisterForm4.value["description"];
  //   this.items.stockNumber=this.RegisterForm4.value["stockNumber"];
  //   this.items.remarks=this.RegisterForm4.value["remarks"];
  //   console.log(this.items);
  // this.service.UpdateItems(this.items).subscribe(res=>{
  //   console.log('Record Updated');
  // }
  // ,err=>{
  //   console.log(err);
  // })
  // }
  get f() { return this.RegisterForm4.controls; }
  onReset(){
    this.submitted=false;
  this.RegisterForm4.reset();
  }
  Logout(){
    this.route.navigateByUrl('/login');
  }
  GetSubCategory()
  {
    let cid=this.RegisterForm4.value["categoryId"];
    console.log(cid);
    this.service.GetSubCategories(cid).subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
    })
  }
}