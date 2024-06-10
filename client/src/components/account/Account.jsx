"use client";
import { useState } from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";

export default function Account() {
  const [formField, toggleFormField] = useState(true);

  const toggleForm = () => {
    toggleFormField((prevState) => !prevState);
  };
  return (
    <div className="px-3">
      <div className="max-w-[480px] px-5 mx-auto rounded-[32px] mt-[10%] text-center shadow-xl">
        <h1 className="font-extrabold text-4xl">DevHive</h1>
        {formField ? (
          <LoginForm toggleFormField={toggleFormField} />
        ) : (
          <SignupForm toggleFormField={toggleFormField} />
        )}
        <div>
          <button
            onClick={toggleForm}
            className="p-2 mb-10 underline transition transform hover:-translate-y-1 hover:scale-105"
          >
            {formField ? "Create a new account" : "Already have an account"}
          </button>
        </div>
      </div>
    </div>
  );
}
