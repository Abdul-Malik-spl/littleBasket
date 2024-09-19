import React, { useEffect, useState } from "react";
import Navbar from "../Nav";
import { useSearchParams,useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import "./Details.css";
import { BiBookmark } from "react-icons/bi";
import { Context } from "../Context/Context";
import { useContext } from "react";

let Details = () => {
  let { state, dispatch } = useContext(Context);
  let [selectProduct, setSelectProduct] = useState({});
  let nav=useNavigate()

  useEffect(() => {
    find();
  }, [state.product]);

  let [p] = useSearchParams();

  let find = () => {
    let obj = state.product.find((a, b) => {
      return b === Number(p.get("name"));
    });
    
    setSelectProduct(obj);
  };
  let add=()=>{
    let obj= state.product.map((a,b)=>{
      return b==Number(p.get("name"))?{...a,iscart:true}:a
    })
    dispatch({type:"iscartUpdate",payload:obj})
  }

  let plus = () => {
    if (selectProduct.count == 10) {
      alert("not allowed ");
    } else {
      let increase = state.product.map((a, b) => {
        return b == Number(p.get("name")) ? { ...a, count: a.count + 1 } : a;
      });
    
      dispatch({ type: "iscartUpdate", payload: increase });
    }
  };

  let minus = () => {
    if (selectProduct.count==1) {
      let obj = state.product.map((a, b) => {
        return Number(p.get("name")) == b ? { ...a, iscart: false } : a;
      });
      dispatch({ type: "iscartUpdate", payload: obj });
    } else {
      let dec = state.product.map((a, b) => {
        return b == Number(p.get("name")) ? { ...a, count: a.count - 1 } : a;
      });
      dispatch({ type: "iscartUpdate", payload: dec });
    }
  };

  let faviItem=()=>{
    if(selectProduct.isFav==true){
      let obj=state.product.map((a,b)=>{
    return b== Number(p.get("name"))?{...a,isFav:false}:a
   })
    dispatch({type:"iscartUpdate",payload:obj})
}
else{
  let obj=state.product.map((a,b)=>{
    return b== Number(p.get("name"))?{...a,isFav:true}:a
   })
    dispatch({type:"iscartUpdate",payload:obj})
}
  }

  let goHome=()=>{
    let msg="Home"
  nav(`/?name=${msg}`)
  }


  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div
            className="col-10 col-md-10 col-lg-10  col-xlg-10"
            style={{ background: "whitesmoke" }}
          >
            <span>
              <HiHome onClick={goHome} />
              Home
            </span>
            <span onClick={goHome}> / Fruits & Vegtables</span>
            <span onClick={goHome}> / Fresh Vegtables</span>
            <span onClick={goHome}> / cucumber & capsicum</span>
          </div>
          <div
            className="social col-2 col-md-2 col-lg-2 col-xlg-2 row "
            style={{ background: "whitesmoke" }}
          >
            <span
              className="col-4 col-md-4 col-lg-4 col-xlg-4"
              style={{ color: "blue" }}
            >
              <FaFacebook />
            </span>
            <span
              className="col-4 col-md-4 col-lg-4 col-xlg-4"
              style={{ color: "skyblue", fontSize: "bolder" }}
            >
              <BsTwitter />
            </span>
            <span
              className="col-4 col-md-4 col-lg-4 col-xlg-4"
              style={{ color: "maroon" }}
            >
              <CgMail />
            </span>
          </div>
        </div>
        <div className="content" style={{ marginTop: "5%" }}>
          <div className="container">
            <div className="row">
              <div className="col-0 col-md-0 col-lg-2 col-xlg-2"></div>
              <div className="img-content col-5 col-md-6 col-lg-5 col-xlg-5">
                <img src={selectProduct.img} width="100%" alt="" />
              </div>

              <div className="price-details col-7 col-md-6 col-lg-5 col-xlg-5">
                <div style={{ marginLeft: "5px" }}>
                  <p>
                    <u style={{ color: "gray" }}>fresho!</u>
                  </p>
                  <h3 style={{ marginTop: "5%" }}>
                    fresho!{selectProduct.name}
                  </h3>
                  <p style={{ color: "gray", marginTop: "5%" }}>
                    MRP:&#8377;<del>{selectProduct.mrp}</del>
                  </p>
                  <h3 style={{ marginTop: "5%" }}>
                    Price:&#8377;{selectProduct.price}
                    <span style={{ color: "gray", fontSize: "15px" }}>
                      (&#8377;{selectProduct.price}/kg)
                    </span>
                  </h3>
                  <p style={{ color: "gray", marginTop: "5%" }}>
                    You Save:{selectProduct.offer}% OFF
                  </p>
                  <p style={{ color: "gray", marginTop: "5%" }}>
                    (inclusive of all taxes)
                  </p>
                  <div className="container">
                    <div className="row" style={{ marginTop: "10%" }}>
                      {selectProduct.iscart ? (
                        <div className="col-5 col-md-5 col-lg-5 col-xlg-5 row">
                          <button
                            className="col-4 col-md-4 col-lg-4 col-xlg-4"
                            style={{ background: "red", color: "white" }}
                        onClick={minus}>
                            -
                          </button>
                          <span
                            className="col-4 col-md-4 col-lg-4 col-xlg-4"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1px solid gray",
                            }}
                          >
                            {selectProduct.count}
                          </span>
                          <button
                            className="col-4 col-md-4 col-lg-4 col-xlg-4"
                            style={{ background: "red", color: "white" }}
                          onClick={plus}>
                            +
                          </button>
                        </div>
                      ) : (
                        <div className="col-5 col-md-5 col-lg-5 col-xlg-5 details-add-div">
                          <button className="details-add-btn" onClick={add}>
                            Add To Basket
                          </button>
                        </div>
                      )}
                      <div className="col-2 col-md-2 col-lg-2 col-xlg-2"></div>
                      <div className="col-5 col-md-5 col-lg-5 col-xlg-5 details-save-div">
                      {selectProduct.isFav? <button className="details-save-btn-true" onClick={()=>faviItem()}>
                          <BiBookmark /> Save for Later
                        </button>: <button className="details-save-btn" onClick={()=>faviItem()}>
                          <BiBookmark /> Save for Later
                        </button>}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
