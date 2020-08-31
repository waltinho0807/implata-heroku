import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';

import ShopDetailsRelated from '../../components/shop/ShopDetailsRelated';
import ShopDetailsBread from '../../components/shop/ShopDetailsBread';
import ShopDetails from '../../components/shop/ShopDeatails';




const Loja = ({currentUser})=>{
    return (
        <div>
            <Head/>
            <Header currentUser={currentUser} />
            <ShopDetailsBread/>
            <ShopDetails/> 
            <ShopDetailsRelated/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Loja;