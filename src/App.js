 import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Product from "./products/Product";
import Recommended from "./Recommended/Recommended"
import Sidebar from "./sidebar/Sidebar";
import Card from "./components/Card";
import {nanoid} from "nanoid";
import "./index.css"
//database
import products from "./db/data";

function App() {


  const[selectedCategory,setselectedCategory]=useState(null);
  const[query,setQuery]=useState("");


  //--------------------------input filter----------------------------

  

  function handleInputChange(event){
    setQuery(event.target.value);
  }

 const filteredItems=products.filter((Product)=>
 Product.title.toLowerCase().indexOf(query.toLowerCase())!==
 -1
 
 )

  //--------------------------Radio filter----------------------------
function handleChange(event){
  setselectedCategory(event.target.value)
}

 //--------------------------Button filter----------------------------

 function handleButton(event){
    setselectedCategory(event.target.value);
 }
  //--------Main function for filtering

  function filteredData(products,selected,query){

    let filteredProducts=products;
    //filtering input items
    if(query){
      filteredProducts=filteredItems;
    }
    //selected Filter
    if(selected){
      filteredProducts=filteredProducts.filter(
        ({category,color,title,newPrice,company})=>
      category===selected ||
       color===selected||
       title===selected||
       company===selected||
       newPrice===selected
      );

    }

    return filteredProducts.map(({img,title,star,prevPrice,newPrice,reviews})=>(

      <Card key={nanoid()}
        img={img}
        title={title}
        star={star}
        newPrice={newPrice}
        prevPrice={prevPrice}
        reviews={reviews}
      />


    )

  );


  }

  const result=filteredData(products,selectedCategory,query);



  return (
    <>
    
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleButton={handleButton} />
      <Product result={result}/>
      
    </>
  );
}

export default App;
