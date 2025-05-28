import React, { useState } from 'react'


const Todo = () => {

    const [name, setname] = useState('')
    const [title, settitle] = useState('')
    const [helpbox, sethelpbox] = useState('')
    const [filterbton, setbutton] = useState('')

    const handleSubmit = () => {
        setbutton({
            name,
            title,
            helpBox: helpbox
        });
    };
    return (
        <>
            <div className='ml-50 mt-50 border-2 w-60 p-5'>
                <label>Enter Name:---</label>
                <input onChange={(e) => setname(e.target.value)} value={name} className='border-2 mt-5' type="text" placeholder='Enter your Name' /><br />
                <label>Enter Title:--</label>
                <input onChange={(e) => settitle(e.target.value)} value={title} className='border-2 mt-5' type="text" placeholder='Enter your title' /><br />
                <label>Enter help box:-</label>
                <input onChange={(e) => sethelpbox(e.target.value)} className='border-2 mt-5' type="text" value={helpbox} placeholder='Enter your Help Box' /><br />
                <button onClick={() => handleSubmit} className='bg-amber-300 p-2 ml-10 mt-5'>Sumbit</button>

                {filterbton && (
                    <div className="mt-5 ml-10 border-2 w-80 p-5 bg-gray-100">
                        <h3 className="font-bold mb-2">Sumbit Data:</h3>
                        <p>Name:{filterbton.name}</p>
                        <p>Title:{filterbton.title}</p>
                        <p>Help Box:{filterbton.helpBox}</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default Todo