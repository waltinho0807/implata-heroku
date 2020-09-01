import React from 'react';

import ShopBread from '../../components/shop/ShopBread';
import Shop from '../../components/shop/Shop';

const Loja = ({currentUser, produtos})=>{
    console.log(produtos)
    return (
        <div>
            <ShopBread />
            <Shop />
        </div>
    )
   
}

Loja.getInitialProps = async (context, client)=>{
    const {data} = await client.get('/api/produtos');

    return {produtos: data}
}


export default Loja;