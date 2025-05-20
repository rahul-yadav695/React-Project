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
            <div className=''>
                {/* <Tostifiy error={error} /> */}
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
                  <ToastContainer />
            </div> 
 
        </>
    )
}

export default SigninPage