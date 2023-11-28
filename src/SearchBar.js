import React from "react";
import './css/SearchBar.css';

const SearchBar = ({searchTriger}) => {
   // console.log(searchTriger)
    return (
        <div className="searchcontainer">
            <input 
                type="search" 
                className="textbox br3 bg-lightest-blue" 
                onChange={searchTriger} 
                placeholder="Enter Robot's Name"
            />
        </div>
    );
}

export default SearchBar;