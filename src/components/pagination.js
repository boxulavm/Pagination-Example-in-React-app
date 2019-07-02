import React from 'react'

const pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link bg-info m-1'>
                            {number}
                        </a>
                    </li>
                ))}
            </nav> 
        </div>
    )
}

export default pagination
