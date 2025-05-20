import React, { useState } from 'react'
import Product from './Product';
import Tostifiy from './Tostifiy';

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("")


    const timers = (msg) => {
        setError(msg)
        setTimeout(() => {
            setError(null)
        }, 4000);
    }

    const logout = () => {
        setLogin(false)
    }
    const handleLogin = () => {

        if (email === "" || email.length <= 5 || password === "" || password.length <= 8) {

            // setError("pleasw correct usrname and password")
            timers("please correct usrname and password")
            setEmail("")
            setPassword("")

        } else {
            // setLogin(true)
            localStorage.setItem("token", true)
            // setError("congrass you have login succesfully done thank you !")
            timers("congrass you have login succesfully done thank you !")
            setEmail("")
            setPassword("")
        }
    }

    const reloadStop = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <div className=''>
                <Tostifiy error={error} />
                {login === false ? <form className='flex justify-center shadow-amber-800' onSubmit={reloadStop}>
                    <div className='w-100 h-100 border-4 mt-20'>
                        <div className='flex justify-center mt-20'>
                            <input type="text" autoFocus placeholder='Enter Yor text' value={email} onChange={(e) => setEmail(e.target.value)} className='w-90 h-10 border-2 border-amber-400 ' />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Yor Password' className='w-90 h-10 border-2 border-green-400 ' />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button onClick={handleLogin} className='w-60 h-10  bg-emerald-400'>Click Me</button>
                        </div>
                    </div>
                </form> : <Product logout={logout} />}
            </div>




            {/* <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Tostifiy error={error} /> 
                {login === false ? (
                    <form className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md" onSubmit={reloadStop}>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                        <div className="mb-4">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-amber-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
                        >
                            Log In
                        </button>
                    </form>
                ) : (
                    <Product logout={logout} />
                )}
            </div> */}

        </>
    )
}

export default SigninPage