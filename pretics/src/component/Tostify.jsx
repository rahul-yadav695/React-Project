import React from 'react';

const Tostify = ({ message, type }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div>
            <p className={`${bgColor} text-white w-75 h-10 flex justify-center items-center rounded-2xl absolute top-4 z-50 right-2.5`}>
                {message}
            </p>
        </div>
    );
};

export default Tostify;
