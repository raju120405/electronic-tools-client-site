import React from 'react';
import Review from './Review';

const Revews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Olivia Emma',
            reviews: '',
            location: 'california',
            picture: "https://i.ibb.co/vQ8tz98/pexels-photo-1101597.webp",
        },
        {
            _id: 2,
            name: 'Charlotte Amelia',
            reviews: '',
            location: 'california',
            picture: "https://i.ibb.co/GMPS90y/pexels-photo-1322130.jpg",
        },
        {
            _id: 3,
            name: 'sabrina sultana',
            reviews: '',
            location: 'california',
            picture: "https://i.ibb.co/G3P0Lj0/pexels-tu-n-ki-t-jr-1382728.jpg",
        }
    ]
    return (
        <div>
            <div className='text-center text-xl uppercase text-primary font-bold mt-10'>
                <h2>Testimonial</h2>
                <h2 >what our client say</h2>
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Revews;