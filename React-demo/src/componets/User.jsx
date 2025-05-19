import React from 'react'

function User(props) {
    return (
        <div className='flex justify-around mt-80'>
            {props.user.map((value) => {
                return (
                    <div>
                    <p>Name:-{value.name}</p>
                    <p>Age:-{value.age}</p> 
                    {/* <p>Status:-{value.status}</p> */}
                    {value.status=='active'? <p className='bg-red-500'>Status:-{value.status}</p> :  <p className='bg-blue-500'>Status:-{value.status}</p>}
                </div>
                )
                
            })}
        </div>
    )
}

export default User