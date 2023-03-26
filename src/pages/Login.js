import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();

    //login user
    await Login(email, password);
  };
  return (
    <form
      onSubmit={handleLogin}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-sky-400 mb-10">Login</h2>
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
        Log in
      </button>
    </form>
  );
};

export default Login;
