import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <div className={`${form === "act" ? " " : "translate-x-[-350px]"}`}>
        <h1 className=" text-center flex flex-col gap-[20px]">
          <span className="font-bold text-2xl">Hello Welcome, Again!</span>
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
    </>
  );
};

export default RegisterForm;
