import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Context'
import './Favorite.css'


let FavoriteItem=()=>{
    let {state,dispatch}=useContext(Context)
    let[FavItems,setFavItems]=useState([])

    // useEffect(()=>{FilterItem()},[state.product])
    // let FilterItem=()=>{
    //     let FilterItems=state.product.filter((a,b)=>{
    //         return a.isFav==true
    //     })
    //     setFavItems(FilterItems)
    // }

    let add = (index) => {
        let objAdd = state.product.map((a, b) => {
          return b === index ? { ...a, iscart: true } : a;
        });
        console.log(objAdd);
        dispatch({ type: "iscartUpdate", payload: objAdd });
      };
      let plus = (index, cnt) => {
        if (cnt == 10) {
          alert("not allowed ");
        } else {
          let increase = state.product.map((a, b) => {
            return b == index ? { ...a, count: a.count + 1 } : a;
          });
          console.log(increase);
          dispatch({ type: "iscartUpdate", payload: increase });
        }
      };
    
      let minus = (index, cnt) => {
        if (cnt == 1) {
          let obj = state.product.map((a, b) => {
            return index == b ? { ...a, iscart: false } : a;
          });
          dispatch({ type: "iscartUpdate", payload: obj });
        } else {
          let dec = state.product.map((a, b) => {
            return b == index ? { ...a, count: a.count - 1 } : a;
          });
          dispatch({ type: "iscartUpdate", payload: dec });
        }
      };
    

    let unFav=(index)=>{

        let obj=state.product.map((a,b)=>{
            return b==index?{...a,isFav:false}:a
        })
        dispatch({type:"iscartUpdate",payload:obj})


    }
    return(
        <div>
          <h2>Your Favorite Items</h2>
            <div className="container">
                <div className="row">
         {state.product.map((a,b)=>{
            return a.isFav?(
                <div className='col-12 col-md-6 col-lg-4 col-xlg-3'>
                    <div className="cardStyleF">
                    <div className="imgdiv">
                    <img
                      src={a.img}
                      width="100%"
                     
                    />
                  </div>
                <h2 style={{marginTop:"10px"}}>{a.name}</h2>
                <h4 style={{marginTop:"10px"}}>{a.price}&#8377;<sup style={{color:"gray"}}>&#8377;<del>{a.mrp}</del></sup></h4>
                <div className="row" style={{marginTop:"10px"}}>
              <div className='col-6 col-md-6 col-xl-6 col-xlg-6'><button onClick={()=>unFav(b)} className='btn-um-fav'>Un-Favourite</button></div>
              {a.iscart ? (
                      <div className="col-6 col-md-6 col-lg-6 col-xlg-6 row">
                        <button
                          className="col-4 col-md-4 col-lg-4 col-xlg-4 minus"
                          onClick={() => {
                            minus(b, a.count);
                          }}
                        >
                          -
                        </button>
                        <span className="col-4 col-md-4 col-lg-4 col-xlg-4 res">
                          {a.count}
                        </span>
                        <button
                          className="col-4 col-md-4 col-lg-4 col-xlg-4 plus"
                          onClick={() => plus(b, a.count)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-btn-card col-6 col-md-6 col-lg-6 col-xlg-6 "
                        onClick={() => add(b)}
                      >
                        Add
                      </button>
                    )}
               </div>
                </div>
                </div>
            ):""
         })}
</div>
        </div>
        </div>
    )
}
export default FavoriteItem