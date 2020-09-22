import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchForm() {
    return (

        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="Search" className="sr-only">Search</label>
                <input type="Search" className="form-control" id="Search" />
            </div>
  
            </form>
            );
}

export default SearchForm;