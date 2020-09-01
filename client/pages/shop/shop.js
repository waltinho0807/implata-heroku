import React from 'react';


import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';




import ShopBread from '../../components/shop/ShopBread';
import Shop from '../../components/shop/Shop';

const Loja = ({currentUser, produtos})=>{
    console.log(produtos)
    return (
        <div>
            
            <ShopBread />
            <Shop />
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

Loja.getInitialProps = async (context, client)=>{
    const {data} = await client.get('/api/produtos');

    return {produtos: data}
}

export default Loja;

export default Loja;