import React from 'react';
import {useFetch} from './hooks';

function Stories(){

    const stories = useFetch("https://news-proxy-server.appspot.com/topstories", []);
    return(
        <div className='Stories'>
           {renderStories(stories)}
        </div>
    )
}


function renderStories(stories = []) {
    return stories.map(({ id, title, time, by, url }) => {
        return (
            <div key={id}>
                <a href={url}>{title}</a>
                <div>{by} - {new Date(time * 1000).toLocaleDateString()}</div>
            </div>
        )
    });
}

export default Stories;