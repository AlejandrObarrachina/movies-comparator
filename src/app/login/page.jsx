"use client";

import RootLayout from "../layout";
import { saveUserData } from "../services/fetch";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogginIn, setisLogginIn] = useState("");

  function submitHandler() {
    if (!email || !password) {
      setError("Please enter valid email and password");
      return;
    }
  }
  /*
  const sendData = async () => {
    var password = document.getElementById("password").value;

    var username = document.getElementById("username").value;
    const userData = {
      username,
      password,
    };
    await saveUserData(userData);
  }; */
  return (
    <RootLayout title="TBMCE || Login - Sign in">
      <div className="flex-1 flex flex-col justify-center text-xs sm:text-sm items-center gap-2 sm:gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl uppercase select-none">
          {isLogginIn ? "Login" : "Register"}
        </h1>
        {error && (
          <div className="w-full max-w-[40ch] border-rose-400 text-rose-400 py-2 border border-solid text-center">
            {error}
          </div>
        )}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch] duration-300 border-b-2 border-solid border-white focus:border-fuchsia-300"
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          className="outline-none text-slate-900 p-2 w-full max-w-[30ch]"
        />
        <button
          onClick={submitHandler}
          className="w-full max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:left-0 after:absolute after:bottom-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-y-full after:duration-300"
        >
          <h2 className="relative z-20 hover:text-slate-900">SUBMIT</h2>
        </button>
        <h2
          className="duration-300 hover:scale-110 hover:cursor-pointer"
          onClick={() => {
            setisLogginIn(!isLogginIn);
          }}
        >
          {!isLogginIn ? "Login" : "Register"}
        </h2>
      </div>
    </RootLayout>
  );
}
