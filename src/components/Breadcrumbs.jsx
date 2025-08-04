// src/components/Breadcrumbs.jsx
import React from 'react';

const Breadcrumbs = ({title}) => {
    return (
        <div className="text-stone-300 text-base font-normal font-supermolot">
            {title}
        </div>
    );
};

export default Breadcrumbs;