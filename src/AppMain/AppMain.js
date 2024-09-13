import React from 'react'
import Nav from '../Component/Nav'
import Banner from '../Component/Banner/Banner'
import Product from '../Component/product/Products'


let AppMain=()=>{


    return(
        <div>
            <Nav/>
<div className="container">
<Banner/>
<Product/>
</div>
        </div>
    )
}
export default AppMain