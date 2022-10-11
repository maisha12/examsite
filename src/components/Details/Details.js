import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData()
    console.log(details.data);
    return (
        <div>
            <h2> hello </h2>
        </div>
    );
};

export default Details;