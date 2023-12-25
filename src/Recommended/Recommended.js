import React from 'react';
import Button from '../components/Button';
import "./Recommended.css";
export default function Recommended({handleButton}) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleButton} value='' title='All Products'/>
        <Button onClickHandler={handleButton} value='Nike' title='Nike'/>
        <Button onClickHandler={handleButton} value='Adidas' title='Adidas'/>
        <Button onClickHandler={handleButton} value='Puma' title='Puma'/>
        <Button onClickHandler={handleButton} value='Vans' title='Vans'/>
        
        
        
        
        
      </div>
    </div>
  )
}
