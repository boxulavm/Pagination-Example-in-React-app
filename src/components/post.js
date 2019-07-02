import React from 'react';
import Loader from  './loader';

const post = ({ posts, loading}) => {
    if(loading) {
        return <Loader />
    }

    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item text-left m-2 p-2'>
                    <span className='text-info'>{post.id} </span>- {post.body}
                </li>
            ))}
        </ul>
    )
}

export default post
