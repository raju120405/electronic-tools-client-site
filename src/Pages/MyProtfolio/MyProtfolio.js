import React from 'react';

const MyProtfolio = () => {
    return (
        <div>
            <div className='text-center text-2xl'>
                <h2 className='text-3xl text-primary mb-10 underline underline-offset-8'> This is my portfolio </h2>
            </div>
            <div>
                <div class="flex flex-col w-full lg:flex-row ">
                    <div class="grid flex-grow  card bg-base-300 rounded-box place-items-center p-5">
                        <h2 className='text-3xl text-primary '> My Information</h2>
                        <h2>Name: Md Raju Ahmed</h2>
                        <h2>Email-Address: raju120405@gmail.com</h2>
                        <h2>Educational Qualification</h2>
                        <h1>Pabna Polytechnic Institute </h1>
                        <h2>Department Of computer technology.</h2>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow  card bg-base-300 rounded-box place-items-center p-5">
                        <h2 className='text-center  text-2xl text-primary'>List Of Technology Of Skills </h2>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React router</li>
                        <li>Firebase</li>
                        <li>MongoDb</li></div>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Best Projects Links
                </div>
                <div class="collapse-content">
                    <p>1,   https://fastidious-alpaca-5b62ec.netlify.app/</p>
                    <p>2, https://heartfelt-toffee-c1bf90.netlify.app/#</p>
                    <p>3, https://harmonious-mandazi-da2d99.netlify.app/</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 mt-8'>

            <div class="card w-full bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/Hrx9Mx6/Screenshot-2022-05-26-164306.png" alt="Shoes" /></figure>
           </div>
            <div class="card w-full bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/Qfpy6fS/Screenshot-2022-05-26-164332.png" alt="Shoes" /></figure>
           </div>
            <div class="card w-full bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/Jynyt6F/Screenshot-2022-05-26-164351.png" alt="Shoes" /></figure>
           </div>

            </div>
        </div>
    );
};

export default MyProtfolio;