import React, { Fragment, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'
// import { Pagination } from '@material-ui/core/Pagination'

function Paginate(props) {

    
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.items)
    }, [])
    
    console.log(items)

    const handlePageClick = (data) =>{
        
        console.log(data.selected)
        props.onChange(data.selected)
    }

    return(
        <ReactPaginate 
            previousLabel={'precedent'}
            nextLabel={'suivant'}
            pageCount={15}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination-container'}
            pageClassName={'pagination-item'}
            previousClassName={'pagination-item'}
            nextClassName={'pagination-item'}
            breakClassName={'dots'}
        />
    )
}

export default Paginate