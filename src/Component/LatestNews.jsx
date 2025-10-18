import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 p-5 items-center justify-center bg-base-100 mb-5'>
            <h2 className='text-xl font-bold btn btn-secondary'>Latest</h2>
            <Marquee className='flex gap-5'>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
                <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;