import React from 'react';

import './PageTitle.css';

export default function PageTitle(props)    {
    return (
        <div className={`pageTitle ${props.error ? "error" : ""}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}