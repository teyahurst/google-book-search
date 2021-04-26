import React from 'react'; 


function Search(props){
    return (
        <form onSubmit={event => props.handleSubmit(event)}>
            {/* Search Box */}

            <div className="searchBox">
                <label>Search</label>
                <input type="text" onChange={event => props.setSearchTerm(event.target.value)} required />
                <input type="submit" />
            </div>

            {/* Filters */}
            <div className="filterBox">
                <label htmlFor="printType">Print Type: </label>
                <select id="printType" onChange={event => props.setPrintType(event.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>

                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" onChange={event => props.setBookType(event.target.value)}>
                    <option value="no-filter">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                    <option value="ebooks">All E-Books</option>
                </select>
            </div>
        </form>
    );
}

export default Search; 