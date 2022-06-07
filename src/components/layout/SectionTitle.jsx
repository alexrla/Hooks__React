import React from 'react';

import './SectionTitle.css';

export default function SectionTitle(props) {
    return (
        <div className="sectionTitle">
            <h3>{props.title}</h3>
        </div>
    );
}