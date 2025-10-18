import React, { use } from 'react';
const CategoriePromise = fetch('/categories.json').then(res => res.json());
const Categories = () =>{
    const categories = use(CategoriePromise);

    return (
        <div>
            <h2>All Categories</h2>
        </div>
    );
};

export default Categories;