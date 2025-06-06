import React from 'react';

const Tostify = ({ message }) => { 
    return (
        <div>
            {message===false ?<p className={`text-white bg-red-600 w-75 h-10 flex justify-center items-center rounded-2xl absolute top-4 z-50 right-2.5`}>
                {message}
            </p>:<p className="bg-red-500 text-white w-75 h-10 flex justify-center items-center rounded-2xl px-4">
                    {message}
                </p>}
        </div>
    );
};

export default Tostify;
