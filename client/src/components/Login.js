import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit,reset } = useForm();
  const navigate=useNavigate();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", "Bearer " + result.token)
        navigate("/profile")

      })
      .catch((err) => {
        console.log(err);
        
      });
      reset({data:""});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center">
        <div className="card card-compact flex bg-slate-50 w-96 shadw-xl ">
          <div className="card-body">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
              {...register("email")}
            />
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
              {...register("password")}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary my-2">Lets Go</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
