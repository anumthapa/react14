import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Nav from "./Nav";
import "./style.css";
import Product from "./components/Product";
import Footer from "./components/Footer";


const product =[
  {
    id : 1,
    name:"TShirt",
    description:"",
    img:"https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price:2000.0
  },{
    id : 2,
    name:"TShirt",
    description:"",
    img:"https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price:1300.00
  },{
    id : 3,
    name:"TShirt",
    description:"",
    img:"https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price:300.00
  },{
    id : 4,
    name:"TShirt",
    description:"",
    img:"https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price:10.00
  },{
    id : 5,
    name:"TShirt",
    description:"",
    img:"https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price:500.00
  }
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "this is also"
    };
  }

  render() {
    return (
      <div>
      <Nav/>
        <main className=" pa3 pa5-ns flex flex-wrap">
        {
          product.map(p=><Product key={p.id}{...p}/>)
        }
        </main>
       
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
