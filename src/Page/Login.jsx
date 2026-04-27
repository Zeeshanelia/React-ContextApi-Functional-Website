import { useState } from "react";
import login from "/images/login.webp";
import { Link } from "react-router-dom";


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);

    };

    const inputClass =
        "border-2 border-slate-500 p-2 rounded font-semibold w-full focus:outline-none focus:border-green-400";

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            {/* Image Section */}
            <div>
                <img src={login} alt="Login illustration" className="md:py-10 rounded-lg" />
            </div>

            {/* Form Section */}
            <div className="w-full max-w-md">
                <h1 className="text-green-400 font-bold text-2xl text-center">
                    Welcome Back
                </h1>
                <p className="text-slate-800 font-bold text-lg mb-4 text-center">
                    Please Login to Continue
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            id="email"
                            className={inputClass}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input
                            id="password"
                            className={inputClass}
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    <div className="flex justify-between text-sm">
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Forgot Password?
                        </span>

                        <Link to="/signup" className="text-gray-600">
                            New user?{" "}
                            <span className="text-green-500 cursor-pointer ml-1">
                                Sign Up
                            </span>
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-400 text-white font-semibold py-2 rounded hover:bg-green-500 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;