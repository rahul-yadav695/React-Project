import React from 'react'

const Tostifiy = (props) => {
    return (
        <div>
            <div className='absolute bg-red-500 text-white top-1.5 right-2 rounded '>
                <p>{props.error}</p>
            </div>
        </div>
    )
}

export default Tostifiy
