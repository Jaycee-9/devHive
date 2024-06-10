"use client";

import { useState } from "react";
import { Close } from "@mui/icons-material";
import { userSignup } from "@/service/api";
import { toast } from "react-toastify";

const intialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function SignupForm({ toggleFormField }) {
  const [formFields, setFormFields] = useState(intialValues);
  const [error, setError] = useState(true);
  const [message, setMessage] = useState(null);

  const handleInput = (evt) => {
    setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
  };

  const signupUser = async (evt) => {
    evt.preventDefault();

    if (validate()) {
      try {
        await userSignup(formFields);
        toast.success("Signup successful! Redirecting to login...");

        setFormFields(intialValues);
        setMessage(null);

        setTimeout(() => {
          toggleFormField((prevState) => !prevState);
        }, 4000);
      } catch (error) {
        setMessage(error.response.data.msg);
      }
    }
  };

  const validate = () => {
    if (formFields.password !== formFields.confirmPassword) {
      setError(false);
      return false;
    }
    setError(true);
    return true;
  };

  return (
    <div className="max-w-[400px] h-[400px] mx-auto">
      <form onSubmit={signupUser} className=" p-1 mt-[20%]">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formFields.email}
          onChange={handleInput}
          className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formFields.username}
          onChange={handleInput}
          className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
          required
        />
        <div className="flex relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formFields.password}
            onChange={handleInput}
            className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
            required
          />
          {error ? (
            ""
          ) : (
            <h1 className="absolute left-[90%] top-4">
              <Close className="rounded-[50%]  bg-red-800" />
            </h1>
          )}
        </div>
        <div className="flex relative">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formFields.confirmPassword}
            onChange={handleInput}
            className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
            required
          />
          {error ? (
            ""
          ) : (
            <h1 className="absolute left-[90%] top-4">
              <Close className="rounded-[50%]  bg-red-800" />
            </h1>
          )}
        </div>
        {message === null ? "" : <h1 className="mt-4 h-5">{message}</h1>}
        <button className="w-full px-8 py-3 bg-gradient-to-r mt-[30px] from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 transition transform hover:-translate-y-1 hover:scale-105">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
