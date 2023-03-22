import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate=useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/register", {
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
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // <div className='bg-color bg-slate-50'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center items-center">
        <div className="card card-compact flex bg-slate-50 w-96 shadw-xl ">
          <div className="card-body">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
              {...register("firstname")}
            />
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
            <input
              type="text"
              placeholder="confirm password"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
              {...register("cpassword")}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary my-2">Lets Go</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    // </div>
  );
}

export default Register;
