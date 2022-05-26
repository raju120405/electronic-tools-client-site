import React from 'react';

const Business = () => {
    return (
        <div className='text-center  mt-5 '>
            <h2 className='text-4xl text-primary'>Millions Business Trust Us</h2>
            <h2 className='text-xl mt-2'>TRY TO UNDERSTAND USER EXPECTATION</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1>All Country</h1>
                    <p>We Served 100+ customars</p>

                </div>
                
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center">Our Best Tools!</h2>
                    <p>50+ Tools</p>

                </div>
                
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center">Best Reviews!</h2>
                    <p>33k Reviews</p>

                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Business;