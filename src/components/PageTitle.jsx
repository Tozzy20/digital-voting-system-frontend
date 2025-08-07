// src/components/PageTitle.jsx
import React from 'react';

const PageTitle = (props) => {
    return (
        <div className="text-neutral-800 text-4xl font-mak mt-4">
            {props.title}
        </div>
    );
};

export default PageTitle;