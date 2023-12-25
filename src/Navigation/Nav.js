import React from 'react';
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart ,AiOutlineUserAdd} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import './Nav.css';

export default function Nav({handleInputChange,query}) {
  return (
    <nav>

      <div className ='nav-container'>
      <input
      type="text" 
      className='search-input'
      placeholder= '👟 Search Your Shoes'
    
      onChange={handleInputChange}
      value={query}
      />
     <FaSearch/>

      </div>
      <div className='profile-container'>
        <a href="#">
        <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
        <AiOutlineShoppingCart  className='nav-icons'/>
        </a>
        <a href="#">
        <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>

    </nav>
  )
}
