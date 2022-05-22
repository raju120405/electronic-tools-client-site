import React from 'react';

const SpecialProducts = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/Y3CB6Kd/electric-1080584-960-720.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Types of Electrical Testers and Their Uses</h1>
                    <p className="py-6">Professional electricians use a variety of testers to check a wide range of electrical functions in residential and commercial electrical wiring, and DIY homeowners will also find some of these tools useful. Learning to identify these testers, understanding their functions, and learning how to use them will greatly expand your expertise when it comes to working on electrical wiring. </p>
                    <button className="btn btn-primary w-48">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialProducts;