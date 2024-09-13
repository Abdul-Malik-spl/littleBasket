import React, { useReducer } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppMain from '../AppMain/AppMain'
import Details from '../Component/Details/Details'
import { Context } from '../Component/Context/Context.js'
import { initialState,reduce } from '../Component/Context/Reduce.js'
import FavoriteItem from '../Component/FavoriteItem/FavoriteItem.js'
import Bucket from '../Component/BucketDetails/Bucket.js'



let Router=()=>{
    let [state,dispatch]=useReducer(reduce,initialState)

    return(

        <Context.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppMain/>}/>
            <Route path='/Details' element={<Details/>}/>
            <Route path='/FavoriteItem' element={<FavoriteItem/>}/>
            <Route path='/Bucket' element={<Bucket/>}/>
           
           
        </Routes>
            </BrowserRouter>
            </Context.Provider>
    )
}
export default Router