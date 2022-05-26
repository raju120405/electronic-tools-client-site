import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl  font-bold'>How To Improve The Performance of React Application ?</h2>
                <p>1. Keeping component state local where necessary</p>
                <p>2. Memoizing React components to prevent unnecessary re-renders</p>
                <p>3. Code-splitting in React using dynamic import()  </p>

                <h2 className='text-xl  font-bold'>what are the different wat to menage a state react application ?</h2>
                <p> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                </p>
                <h2 className='text-xl  font-bold'>how does prototypal inheritance work ?</h2>
                <p>JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
                <h2 className='text-xl  font-bold'>you have arry of products each obuject has a name price description etc how will you implement a search to find poducts name?</h2>
                <p>We have a great function to create a JavaScript list filter for an array, named filter(). The filter works with an array, and we can use it on most data structures.Calling the filter function on an array does not change the array, but returns a new filtered array. For the callback function</p>
                <h2 className='text-xl  font-bold'>what is a unite test? why shuld write unite test?</h2>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
            </div>

        </div>
    );
};

export default Blog;