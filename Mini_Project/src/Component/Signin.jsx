import React, { useState } from 'react'
import Product from './Product';
// import Tostifiy from './Tostifiy';
import { ToastContainer, toast } from 'react-toastify';

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("")

    const notify = () => toast("Wow so easy!");


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
            notify();
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
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                {login === false ? <div
                        className="w-full max-w-md bg-white shadow-lg rounded-xl p-8"
                        onSubmit={reloadStop}>
                            
                        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
                            Login Form
                        </h2>

                        <div className="mb-4">
                            <input type="text" autoFocus placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 px-4 border border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <div className="mb-6">
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-12 px-4 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                            >
                                Click Me
                            </button>
                        </div>
                    </div>
                 : <Product logout={logout} />
                }

                <ToastContainer />
            </div>

        </>
    )
}

export default SigninPage