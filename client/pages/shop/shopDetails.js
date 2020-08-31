import React from 'react';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';

import ShopDetailsRelated from '../../components/shop/ShopDetailsRelated';
import ShopDetailsBread from '../../components/shop/ShopDetailsBread';
import ShopDetails from '../../components/shop/ShopDeatails';




const Loja = ({currentUser})=>{
    return (
        <div>
            <ShopDetailsBread/>
            <ShopDetails/> 
            <ShopDetailsRelated/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Loja;