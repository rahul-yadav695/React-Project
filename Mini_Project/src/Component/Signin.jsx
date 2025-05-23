import React, { useState } from 'react';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const [error, setError] = useState('');

    const showToast = (msg) => toast(msg);

    const showError = (msg) => {
        setError(msg);
        showToast(msg);
        setTimeout(() => setError(''), 4000);
    };

    const handleLogin = () => {
        if (email.trim().length < 5 || password.trim().length < 8) {
            showError('Please enter a valid email and password');
            setEmail('');
            setPassword('');
        } else {
            setLogin(true);
            showToast('Login successful!');
        }
    };

    const logout = () => {
        setLogin(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {!login ? (
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-center text-emerald-600 mb-6">
                        Login Form
                    </h2>

                    {error && (
                        <p className="text-red-500 text-center text-sm mb-4">{error}</p>
                    )}

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 px-4 border border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    <div className="mb-6">
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 px-4 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleLogin}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            ) : (
                <Product logout={logout} />
            )}

            <ToastContainer />
        </div>
    );
}

export default SigninPage;
