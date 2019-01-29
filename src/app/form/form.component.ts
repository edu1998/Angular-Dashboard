import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { 
    this.colors = [
      {name:"#63b598"}, 
      {name:"#ce7d78"}, 
      {name:"#ea9e70"},
      {name:"#a48a9e"}, 
      {name:"#c6e1e8"}, 
      {name:"#648177"},
      {name:"#0d5ac1"},
      {name:"#f205e6"},
      {name:"#1c0365"},
      {name:"#14a9ad"},
      {name:"#4ca2f9"},
      {name:"#a4e43f"},
      {name:"#d298e2"},
      {name:"#6119d0"},
      {name:"#d2737d"},
      {name:"#c0a43c"},
      {name:"#f2510e"},
      {name:"#651be6"},
      {name:"#79806e"},
      {name:"#61da5e"},
      {name:"#cd2f00"},
    ];

    this.data = {
      name:"",
      lastname:"",
      email:"",
      pass:"",
    }
  }

  public colors: Array<any>
  public data:any;

  send(){
    console.log("my data is",this.data)
  }

  ngOnInit() {
  }

}
