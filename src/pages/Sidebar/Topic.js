import React from 'react';

const Topic = ({tops}) => {
    const {name} = tops;
    console.log(name)
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Topic;