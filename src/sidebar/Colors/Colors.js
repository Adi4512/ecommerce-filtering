import React from 'react';
import "./Colors.css";
import Input from '../../components/Input';

export default function Colors({handleChange}) {
  return (
    <div className='mm'>
    <h2 className="sidebar-title color-title">Colors</h2>
    <label className='sidebar-label-container'>
      <input onChange={handleChange} name='test3' value='' type="radio"  />
      <span className="checkmark all"></span>All
</label>

      <Input

        handleChange={handleChange}
        name='test1'
        value='black'
        title="Black"
        color='black'
      />

      <Input

        handleChange={handleChange}
        name='test1'
        value='blue'
        title="Blue"
        color='blue'
      />

      <Input

        handleChange={handleChange}
        name='test1'
        value='red'
        title="Red"
        color='red'
      />

      <Input

        handleChange={handleChange}
        name='test1'
        value='green'
        title="Green"
        color='green'
      />
      <label className='sidebar-label-container'>
        <input type="radio" name="test1" value="white"
        onChange={handleChange}
         />
         <span className="checkmark" style={{background:"white",border:"2px solid black",color:"white"}}></span>White
      </label>


    </div>
  )
}
