import React from 'react';
import Link from 'next/link';


const Search = ({ currentUser }) => {

    return (
        <div className="hero__search__form">
            <form action="#">
                <div className="hero__search__categories">
                    All Categories
            <span className="arrow_carrot-down"></span>
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" className="site-btn">SEARCH</button>
            </form>
        </div>
    )

}

export default Search;