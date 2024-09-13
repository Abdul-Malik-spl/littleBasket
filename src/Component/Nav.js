// React Component Example
import React, { useContext, useEffect, useState } from 'react';
import './Nav.css'; // Assuming you have a separate CSS file for styling
import { CiSearch } from 'react-icons/ci';
import { HiHeart } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { FaBucket } from 'react-icons/fa6';
import { Context } from './Context/Context';

const Navbar = () => {
  let {state,dispatch}=useContext(Context)
  let[stateshow,setShow]=useState({show:false})
  let [filterProduct,setFilterProduct]=useState([])
  let [totalAmount,setTotalAmount]=useState(0)

  useEffect(()=>{filterPro()},[state.product])

  let nav=useNavigate()
  let FavPage=()=>{
    let fav="FAVORITE"
  nav(`/FavoriteItem?name=${fav}`)
  }
  let ShowBucket=()=>{
    setShow({show:!stateshow.show})
   
  }
  let filterPro=()=>{
     let obj=state.product.filter((a,b)=>{
      return a.iscart===true
     })
     setFilterProduct(obj)
     let amountArray=obj.map((a,b)=>{
      return a.price*a.count
     })
    //  console.log(amountArray)
     
     let ans=amountArray.reduce((a,b)=>{
      return a+b
     },0)
    //  console.log(ans)
     setTotalAmount(ans)

  }
  return (
    <nav className="navbar">
      <div className="nav-content">
       <div className="container">
        <div className="container">
          <div className="row row-mange">
        <img src="data:image/png;base64,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" alt="Logo" className="nav-image" />
      <div className="drobdown col-2 col-md-2 col-xl-2 col-xlg-2">
        <div className="content-drop">
          <div className="inside-drob"><span>sort by</span><span>category</span></div></div>
      </div>

      <div className="inputdiv col-4 col-md-4 col-lg-4 col-xlg-4"><div className="search" for="inp"><span><CiSearch/></span><input type="text" className='input-mk' id='inp'/></div></div>
      <div className="location col-1 col-md-1 col-xl-1 col-xlg-1 row"><button className='location-nav-btn'>location</button></div>
      <div className="Fav col-2 col-md-2 col-xl-2 col-xlg-2 row"><span className='Fav' onClick={FavPage}><HiHeart/></span></div>
      <div className="bucket"><span onClick={ShowBucket}><FaBucket/></span></div>
   
      </div>
      </div>
      {stateshow.show?<div className='bucket-details'>
     <div className="container">
      <div className="row">
      <span className='col-3 col-md-3 col-xl-3 col-xlg-3'>product</span>
        <span className='col-3 col-md-3 col-xl-3 col-xlg-3'>price</span>
        <span className='col-3 col-md-3 col-xl-3 col-xlg-3'>count</span>
        <span className='col-3 col-md-3 col-xl-3 col-xlg-3'>total</span>
      </div>
     </div>
        {filterProduct.map((a,b)=>{
          return <div>
            <div className="container">
              <div className="row bucket-row">
            <div className=' col-3 col-md-3 col-xl-3 col-xlg-3'> <div className='img-div-bucket'><img src={a.img}width="100%"/></div></div>
            <div className=" col-3 col-md-3 col-xl-3 col-xlg-3"><div className='price-div-bucket'><h4>{a.price}</h4></div></div>
            <div className=" col-3 col-md-3 col-xl-3 col-xlg-3"><div className='count-div-bucket'><h4>{a.count}</h4></div></div>
            <div className=" col-3 col-md-3 col-xl-3 col-xlg-3"><div className='item-price'><h4>{a.price*a.count}</h4></div></div>
            </div>
            
         </div>
         </div>       
         })}
         <div className="container">
          <hr/>
              <div className="row">
              <div className=" col-9 col-md-9 col-xl-9 col-xlg-9"><div><h3>TOTAL</h3></div></div>
              <div className=" col-3 col-md-3 col-xl-3 col-xlg-3"><div><h3>{totalAmount}</h3></div></div>
              </div>
            </div>
        
        </div>:""}
      </div>
      

      </div>
    </nav>
  );
};

export default Navbar;
