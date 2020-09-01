import React from 'react';

import ShopBread from '../../components/shop/ShopBread';
import Shop from '../../components/shop/Shop';
import HeroPages from '../../components/form/HeroPages';

const Loja = ({produtos})=>{
    return (
        <div>
            <HeroPages/>
            <ShopBread />
            <Shop data={produtos} response={res} />
        </div>
    )
   
}

Loja.getInitialProps = async (context, client)=>{
    const {data} = await client.get('/api/produtos');
    const res = await client.get(`/shop/shop?page=${currentPage}&limit=${limit}`);

    return {produtos: data, response: res};
}


export default Loja;