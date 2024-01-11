"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const Login = () => {
  const [img, setImg] = useState("/eye.svg");
  const [pass, setPass] = useState("password");
  const [check, setCheck] = useState(false);
  const [form, setForm] = useState("act");

  const handelClick = () => {
    if (img === "/eye.svg") {
      setImg("/eye-slash.svg");
      setPass("text");
    } else {
      setImg("/eye.svg");
      setPass("password");
    }
  };

  const handelform = (actclass: String) => {
    if (actclass === "login") {
      setForm("act");
    } else {
      setForm("pasv");
    }
  };

  const handelcheck = () => {
    setCheck(!check);
  };

  return (
    <>
      <div className="Backimg ">
        <div className="box ">
          <div className="flex flex-col-reverse ">
            <div
              className={`${
                form === "act"
                  ? "translate-y-[-500px] "
                  : "translate-x-[-500px] translate-y-[-500px]"
              }  transition delay-300 duration-500 ease-in-out`}
            >
              <h1 className=" text-center flex flex-col gap-[20px]">
                <span className="font-bold text-2xl">
                  Hello Welcome, Again!
                </span>
                <p className="font-[10px]">We are happy to have you here</p>
              </h1>
              <div className="input-area">
                <input type="Email" placeholder="Email" />
                <div className="flex">
                  <input type={pass} placeholder="password" />
                  <Image
                    src={img}
                    onClick={handelClick}
                    alt="eye-icon"
                    width={20}
                    height={20}
                    className="right-[10px] mt-[15px] absolute"
                  />
                </div>
              </div>

              <div className="flex gap-2 cursor-pointer">
                <input type="checkbox" checked={check} onChange={handelcheck} />
                <span onClick={handelcheck}>Remember Me</span>
              </div>

              <button type="button" className="btn">
                Login
              </button>
              <div className="text-center ">
                <Link href={"#"}>Forgot Password?</Link>
              </div>
            </div>

            {/*register form */}

            <div
              className={`${
                form === "act"
                  ? " translate-y-[-700px]"
                  : " translate-x-[0px]  "
              }  transition delay-300 duration-500 ease-in-out`}
            >
              <h1 className=" text-center flex flex-col gap-[20px]">
                <span className="font-bold text-2xl">
                  Hello Welcome, Again!
                </span>
                <p className="font-[10px]">We are happy to have you here</p>
              </h1>
              <div className="input-area">
                <input type="text" placeholder="User Name" />
                <input type="Email" placeholder="Email" />
                <div className="flex">
                  <input type={pass} placeholder="password" />
                  <Image
                    src={img}
                    onClick={handelClick}
                    alt="eye-icon"
                    width={20}
                    height={20}
                    className="right-[10px] mt-[15px] absolute"
                  />
                </div>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <input type="checkbox" checked={check} onChange={handelcheck} />
                <span onClick={handelcheck}>Remember Me</span>
              </div>
              <button type="button" className="btn">
                Sign in
              </button>
            </div>
          </div>
          {/* togal between login and registerform */}
          <div className="select ">
            <span
              className={`${form === "act" ? " act" : "pasv"} `}
              onClick={() => {
                handelform("login");
              }}
            >
              Login
            </span>
            <span
              className={`${form === "act" ? " pasv" : "act"}`}
              onClick={() => {
                handelform("register");
              }}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
