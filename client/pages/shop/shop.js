import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';




import Bread from '../../components/shop/Bread';
import Shop from '../../components/shop/Shop';

const Loja = ({currentUser})=>{
    return (
        <div>
            <Head/>
            
            <Bread />
            <Shop data={proutos}/>
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