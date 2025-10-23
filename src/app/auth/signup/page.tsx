"use client";

import Link from "next/link";
import { useState } from "react";
import { signUpUser } from "../../../../services/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function sinup(e:React.FormEvent) {
    e.preventDefault()
    if(!email.trim() || password.trim()){
      setMessage("All fields are require!")
    }
    const result = await signUpUser(email, password)
    if(result?.error){
      setMessage(result.error)
    }else{
      setMessage("Signup successful")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[95%] max-w-[300px] rounded-lg py-12 ">
        <h2 className="mb-8 font-bold text-3xl text-primary-text">
          Sign Up to X
        </h2>
        {message && (
          <p className="bg-primary py-1 mb-4 font-semibold text-center">
            {message}
          </p>
        )}

        <form onSubmit={sinup}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="mb-4 w-full bg-background outline-none  rounded-none p-4 placeholder:text-secondary-text border border-border text-white "
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="w-full bg-background outline-none  rounded-none p-4 placeholder:text-secondary-text border border-border text-white "
          />
          <button className="text-black w-full mt-8 rounded-full h-10 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 font-semibold bg-white ">
            Continue
          </button>
        </form>

        <div className="text-secondary-text mt-8">
          <span className="mr-1">Already have an account </span>
          <Link href="/" className="text-primary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
