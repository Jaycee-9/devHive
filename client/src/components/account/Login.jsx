"use client";
import { useState } from "react";
import { userLogin } from "@/service/api";
import { useRouter } from "next/navigation";
import { useData } from "@/utils/context";
import CircularProgress from "@mui/material/CircularProgress";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm() {
  const router = useRouter();
  const [formFields, setFormFields] = useState(initialValues);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useData();

  const loginUser = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const res = await userLogin(formFields);
      setUser(res.data);
      sessionStorage.setItem("user", JSON.stringify(res.data));
      setMessage(null);
      router.push("/");
    } catch (error) {
      setMessage(error.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (evt) => {
    setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="max-w-[400px] h-[400px] mx-auto">
      {loading ? (
        <div className="max-w-[20px] mt-[100px] mx-auto">
          <CircularProgress />
        </div>
      ) : (
        <form onSubmit={loginUser} className="p-1 mt-[20%]">
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleInput}
            placeholder="E-mail"
            className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleInput}
            placeholder="Password"
            className="w-full max-w-[90%] sm:max-w-[380px] border-b-2 border-black mx-auto h-12 my-2 px-4 text-lg sm:text-2xl focus:outline-none"
            required
          />
          {message && <h1 className="mt-4 h-5">{message}</h1>}
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r mt-[50px] from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 transition transform hover:-translate-y-1 hover:scale-105"
            disabled={loading}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
