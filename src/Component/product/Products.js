import React, { useContext } from "react";

import "./product.css";
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";

let Product = () => {
  let { state, dispatch } = useContext(Context);
  // console.log(state)
  let nav = useNavigate();
  let getDetails = (b) => {
    // console.log(b)

    nav(`/Details?name=${b}`);
  };
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

  let Fav = (index, Fav) => {
    if (Fav == true) {
      let Fav = state.product.map((a, b) => {
        return index == b ? { ...a, isFav: false } : a;
      });
      dispatch({ type: "iscartUpdate", payload: Fav });
    } else {
      let Fav = state.product.map((a, b) => {
        return index == b ? { ...a, isFav: true } : a;
      });
      dispatch({ type: "iscartUpdate", payload: Fav });
    }
  };

  return (
    <div id="product">
      <div className="container">
        <div className="row">
          {state.product.map((a, b) => {
            return (
              <div className="card col-12 col-md-6 col-lg-4 col-xlg-3">
                <div
                  className="cardStyle"
                  style={{
                    margin: "10px",
                    border: "1px solid gray",
                    padding: "30px",
                    background: "#ffffff",
                  }}
                >
                  <div className="imgdiv">
                    <img
                      src={a.img}
                      width="100%"
                      onClick={() => getDetails(b)}
                    />
                  </div>
                  <div style={{ marginTop: "30px" }}>
                    <span>fresho!</span>
                  </div>
                  <h4>{a.name}</h4>
                  <div style={{ marginTop: "20px" }}>
                    {a.price}&#8377;
                    <sup style={{ color: "gray" }}>
                      &#8377;<del>{a.mrp}</del>
                    </sup>
                  </div>

                  <div
                    style={{ marginTop: "40px" }}
                    className="add-save-btn row"
                  >
                    <span
                      className="bookmark col-6 col-md-6 col-lg-6 col-xlg-6"
                      onClick={() => Fav(b, a.isFav)}
                    >
                      {a.isFav ? (
                        <FaBookmark style={{ color: "red" }} />
                      ) : (
                        <FaBookmark style={{ background: "white" }} />
                      )}
                    </span>

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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;
