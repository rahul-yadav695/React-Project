import React, { useEffect, useState } from 'react';
import { FaChessKing } from 'react-icons/fa6';

const Apis = () => {
    const [posts, setPosts] = useState([]);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))



    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
                    // setPosts(data.json())
                    const parsedData = await data.json()
                    setPosts(parsedData)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchData()

            // const data = await fetchData()
            // setPosts(data)

        }, []);


    return (
        <div className='grid grid-cols-3 gap-10 p-5 '>
            {posts.map((post, key) => (
                <div key={key} className='border-2 p-3 mt-5 bg-blue-100'>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Apis;

