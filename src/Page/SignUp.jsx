import { useState } from "react";
import signup from "/images/signup.webp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
    console.log("Form Data:", formData);

  };

  const inputClass =
    "border-2 border-slate-500 p-2 rounded font-semibold w-full focus:outline-none focus:border-green-400";

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Image Section */}
      <div>
        <img src={signup} alt="Signup illustration" className="md:py-10" />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md">
        <h1 className="text-green-400 font-bold text-2xl text-center">
          Create New ID
        </h1>
        <p className="text-slate-800 font-bold text-lg mb-4 text-center">
          Please Enter Details
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <div className="flex flex-col gap-1">
            <label htmlFor="firstname" className="font-semibold">
              First Name
            </label>
            <input id="firstname" className={inputClass} type="text" name="firstname" value={formData.firstname} onChange={handleChange} require />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="lastname" className="font-semibold">
              Last Name
            </label>
            <input
              id="lastname"
              className={inputClass}
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input id="email" className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} require />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input  id="password"  className={inputClass}  type="password"  name="password"  value={formData.password}  onChange={handleChange}  required />
          </div>

          <button
            type="submit"
            className="bg-green-400 text-white font-semibold py-2 rounded hover:bg-green-500 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;