import React from 'react';

const Review = ({ review }) => {

    return (


        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Electronic seal means data in electronic form, which is attached to or logically associated with other data in electronic form to ensure the latter’s origin and integrity;</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.picture} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <p> {review.location}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;