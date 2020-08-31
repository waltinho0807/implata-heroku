import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';

import ShopDetailsRelated from '../../components/shop/ShopDetailsRelated';
import ShopDetailsBread from '../../components/shop/ShopDetailsBread';
import ShopDetails from '../../components/shop/ShopDeatails';




const Loja = ()=>{
    return (
        <div>
            <Head/>
            <Header />
            <ShopDetailsBread/>
            <ShopDetails/> 
            <ShopDetailsRelated/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Loja;