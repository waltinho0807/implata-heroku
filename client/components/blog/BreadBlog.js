import React from 'react';

const BreadBlog = ()=>{
    return (
        <section className="breadcrumb-section set-bg" data-setbg="/static/img/breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Blog</h2>
                        <div className="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BreadBlog;