import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';



import Bread from '../../components/shop/Bread';
import Shop from '../../components/shop/Shop';

const Loja = ({currentUser})=>{
    return (
        <div>
            <Head/>
            <Header currentUser={currentUser} /> 
            <Bread />
            <Shop/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Loja;