import React, { useState } from 'react'

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        let Email = "rahul123@gmail.com";
        let Password = "1254875";

        if (email === Email && password === Password) {
            alert("Welcome, baby boy!");
        } else {
            alert("Incorrect email or password. Please try again.");
        }
    }


    return (
        <>
            <form className='flex justify-center raj'>
                <div className='w-80 h-70 border-4 mt-20'>
                    <div className='flex justify-center mt-20'>
                        <input type="email" placeholder='Enter Yor Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-70 h-10 border-2 border-amber-400 ' />
                    </div>
                    <div className='flex justify-center mt-8'>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Yor Password' className='w-70 h-10 border-2 border-green-400 ' />
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button onClick={handleLogin} className='w-60 h-10  bg-emerald-400'>Click Me</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SigninPage