import React from 'react';
import './loader.css';

const loader = () => {
    return (
        <div className='loading'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default loader
