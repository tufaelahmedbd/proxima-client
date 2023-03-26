import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();
  const handleSignup = async (e) => {
    e.preventDefault();

    //signup user
    await signup(email, password);
  };
  return (
    <form
      onSubmit={handleSignup}
      className="sign-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-sky-400 mb-10">Sign up</h2>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="hola@react.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <div className="form-control flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className=" bg-sky-400 text-slate-900 py-3 rounded-xl hover:bg-sky-500 duration-300"
      >
        Sign up
      </button>
      {error && (
        <p className="bg-sky-transparent border  py-3 px-5 rounded-lg outline-none focus:border-sky-400 duration-300 border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
