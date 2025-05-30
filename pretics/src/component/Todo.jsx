import React, { useState } from 'react';

const Todo = () => {
    const [array, setArray] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [images, setImages] = useState(null);
    const [description, setDescription] = useState('');

    const addToArray = () => {
        const newItem = {
            name,
            title,
            description,
            imageUrl: images ? URL.createObjectURL(images) : null
        };

        setArray([...array, newItem]);
        setName('');
        setTitle('');
        setDescription('');
        setImages(null);
        // images.value = "" // ❌ This won't work. You can't reset file input like this.
        document.getElementById('imageInput').value = ""; // ✅ Use id to reset
    };

    // ✅ Delete function
    const handleDelete = (index) => {
        const newArray = array.filter((_, i) => i !== index);
        setArray(newArray);
    };

    return (
        <>
            <div className='ml-5 mt-5 border-2 w-60 p-5'>
                <label>Enter Name:</label>
                <input onChange={(e) => setName(e.target.value)} value={name} className='border-2 mt-2 w-full' type="text" placeholder='Enter your Name' /><br />

                <label>Enter Title:</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='border-2 mt-2 w-full' type="text" placeholder='Enter your Title' /><br />

                <label>Enter Description:</label>
                <input onChange={(e) => setDescription(e.target.value)} value={description} className='border-2 mt-2 w-full' type="text" placeholder='Enter your Help Box' /><br />

                <label>Upload Image:</label>
                <input id="imageInput" onChange={(e) => setImages(e.target.files[0])} className='border-2 mt-2 w-full h-7' type="file" /><br />

                <button onClick={addToArray} className='bg-amber-300 p-2 mt-4 cursor-pointer'>Submit</button>
            </div>

            <div className='mt-5 grid grid-cols-3'>
                {array.map((item, index) => (
                    <div key={index} className='border p-2 mb-2 w-60 ml-5'>
                        <p>Name: {item.name}</p>
                        <p>Title: {item.title}</p>
                        <p>Description: {item.description}</p>
                        {item.imageUrl && (
                            <img className='w-40 h-40 object-contain mt-2 ml-2' src={item.imageUrl} alt="Uploaded Preview" />
                        )}
                        <div className='flex gap-10 raj mt-2'>
                            <button className='bg-cyan-500 w-20 h-10 rounded-2xl cursor-pointer'>Save</button>
                            <button onClick={() => handleDelete(index)} className='bg-red-500 w-20 h-10 rounded-2xl cursor-pointer'>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Todo;
