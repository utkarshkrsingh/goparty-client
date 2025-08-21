import React, { useState } from "react";
import { useTheme } from "./theme-context";
import { FiMail, FiLock } from 'react-icons/fi';

type PageProps = {
    setView: (view: 'home' | 'login' | 'signup') => void
};

export default function LoginForm({ setView }: PageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with: ', { email, password });
        alert('Login successful! (placeholder)');
    };

    const { darkMode } = useTheme();

    return (
        <div className={`w-full max-w-sm text-center animate-fade-in ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} p-8 rounded-xl shadow-2xl border`}>
            <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-6`}>Welcome Back!</h2>
            <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                    <FiMail className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className={`w-full border ${darkMode ? "bg-gray-800 border-gray-700 focus:border-cyan-500 text-white focus:ring-cyan-500/50" : "bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-900 focus:ring-blue-500/50"} placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2`}
                        required
                    />
                </div>
                <div className="relative">
                    <FiLock className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-gray-400"}`} />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className={`w-full border ${darkMode ? "bg-gray-800 border-gray-700 focus:border-cyan-500 text-white focus:ring-cyan-500/50" : "bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-900 focus:ring-blue-500/50"} placeholder-gray-500 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2`}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`cursor-pointer w-full ${darkMode ? "bg-cyan-500 hover:bg-cyan-600 hover:shadow-cyan-500/30" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30"} text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg`}
                >
                    Log In
                </button>
            </form>
            <p className={`mt-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Don't have an account?{' '}
                <button
                    onClick={() => setView('signup')}
                    className={`cursor-pointer font-semibold ${darkMode ? "text-cyan-400" : "text-blue-600"} hover:underline`}
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
};
