import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';


import Cart from '../../components/cart/Cart';
import CartBread from '../../components/cart/CartBread';

const Carrinho = ()=>{
    return (
        <div>
            <Head/>
            <Header />
            <CartBread/>
            <Cart/>    
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default Carrinho;