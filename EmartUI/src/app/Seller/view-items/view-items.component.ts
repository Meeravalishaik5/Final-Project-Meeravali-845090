import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Items} from "src/app/Models/items";
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  RegisterForm7:FormGroup;
  list:Items[];
  items:Items;
  isShow:boolean=true;
  constructor(private service:SellerService,private formBuilder:FormBuilder) { 
  }
  ngOnInit() {
    this.RegisterForm7=this.formBuilder.group({
      id:[''],
      categoryId:[''],
      subcategoryId:[''],
      sellerid:[''],
      price:[''],
      itemName:[''],
      description:[''],
      stockNumber:[''],
      remarks:[''],
      imagename:['']
    });
    this.ViewItems();
  }
  ViewItems()
  { 
    let id=localStorage.getItem('sellerid');
    this.service.ViewItems(id).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
  Search1(){
    this.isShow=!this.isShow;
  }
  Search()
  {
    // this.isShow=!this.isShow;
     let id1=this.RegisterForm7.value["id"];
    console.log(id1);
    this.service.GetItem(id1).subscribe(res=>{
      this.items=res;
      console.log(this.items);
      this.RegisterForm7.setValue({
        id:this.items.id,
        categoryId:this.items.categoryId,
        subcategoryId:this.items.subcategoryId,
        sellerid:this.items.sellerid,
         itemName:this.items.itemName,
        price:this.items.price,
        description:this.items.description,
        stockNumber:this.items.stockNumber,
        remarks:this.items.remarks,
        imagename:this.items.imagename
      })
    })
  }
  Update()
  {
    // this.isShow=!this.isShow;
    this.items=new Items();
    this.items.id=this.RegisterForm7.value["id"];
    this.items.categoryId=this.RegisterForm7.value["categoryId"];
    this.items.subcategoryId=this.RegisterForm7.value["subcategoryId"];
    this.items.sellerid=this.RegisterForm7.value["sellerid"];
    this.items.itemName=this.RegisterForm7.value["itemName"];
    this.items.price=this.RegisterForm7.value["price"];
    this.items.description=this.RegisterForm7.value["description"];
    this.items.stockNumber=this.RegisterForm7.value["stockNumber"];
    this.items.remarks=this.RegisterForm7.value["remarks"];
    this.items.imagename=this.RegisterForm7.value["imagename"]
    console.log(this.items);
  this.service.UpdateItems(this.items).subscribe(res=>{
    console.log('Record Updated');
    alert('Record Updated');
  }
  ,err=>{
    console.log(err);
  })
  }
  Delete(){
    let iid=this.RegisterForm7.value["id"];
    this.service.DeleteItem(iid).subscribe(res=>{
      alert('Record Deleted');
    })
  }

}
