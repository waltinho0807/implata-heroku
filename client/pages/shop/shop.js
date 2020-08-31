import React from 'react';


import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';




import ShopBread from '../../components/shop/ShopBread';
import Shop from '../../components/shop/Shop';

const Loja = ({currentUser, produtos})=>{
    return (
        <div>
            
            <ShopBread />
            <Shop />
            <Footer/>
            <Javascript/>
        </div>
    )
   
}


export default Loja;