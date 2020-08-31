import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';



import ShowBlog from '../../components/blog/ShowBlog';
import ShowBlogHero from '../../components/blog/ShowBlogHero';


const BlogDetails = ({currentUser})=>{
    return (
        <div>
            <Head/>
            <Header currentUser={currentUser}/> 
            <ShowBlogHero />
            <ShowBlog/>       
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default BlogDetails;