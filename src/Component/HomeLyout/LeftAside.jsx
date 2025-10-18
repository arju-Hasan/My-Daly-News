import React, { Suspense } from 'react';
import Categories from '../Categories';
import { PropagateLoader } from 'react-spinners';

const LeftAside = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <Suspense  fallback={<PropagateLoader />}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;