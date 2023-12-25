import React from 'react';
import Category from "./category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { RiShoppingCartFill } from "react-icons/ri";

import './Sidebar.css';
export default function Sidebar({handleChange}) {
  return (
    <>
        <section className='sidebar'>
            <div className="logo-container">
                <h1><RiShoppingCartFill/></h1>
            </div>
            <Category handleChange={handleChange} /> 
            <Price   handleChange={handleChange} />
            <Colors  handleChange={handleChange} />

        </section>
    </>
  )
}
