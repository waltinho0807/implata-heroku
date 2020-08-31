import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';
import Header from '../../components/Header';

import HeroPages from '../../components/form/HeroPages';

import Blog from '../../components/blog/Blog';
import BreadBlog from '../../components/blog/BreadBlog';
import BlogRelated from '../../components/blog/BlogRelated';

const BlogPage = ({currentUser})=>{
    return (
        <div>
            <HeroPages/> 
            <BreadBlog />
            <Blog/>
            <BlogRelated/>
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default BlogPage;