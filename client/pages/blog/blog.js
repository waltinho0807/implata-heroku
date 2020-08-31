import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';



import Blog from '../../components/blog/Blog';
import BreadBlog from '../../components/blog/BreadBlog';
import BlogRelated from '../../components/blog/BlogRelated';

const BlogPage = ()=>{
    return (
        <div>
            <Head/>
            <Header /> 
            <BreadBlog />
            <Blog/>
            <BlogRelated/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default BlogPage;