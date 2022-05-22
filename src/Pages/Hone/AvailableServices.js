import React, { useEffect, useState } from 'react';

import Service from './Service';

const AvailableServices = () => {
    const [services,setServices]=useState([]);
   
        useEffect(()=>{
            fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
        },[])
        
        return (
            
            <div>
                <h1 className='text-center text-4xl mt-4 text-primary'>Our Tools</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                      services.map(service=><Service
                      key={service._id}
                      service={service}
                      
                      ></Service>) 
                    }
                </div>
             
            </div>
    );
};

export default AvailableServices;