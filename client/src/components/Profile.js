
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postFetch } from "./Fetchfunction";

import GetNotes from "./GetNotes";
import Navbar from "./Navbar";
function Profile() {
  const { register, handleSubmit } = useForm();
  const [seed, setSeed] = useState(1);

  const onSubmit = (data) => {
  
    postFetch(data);
    setSeed(Math.random());
  };
  return (
    <>
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center">
            <div className="card card-compact flex bg-slate-50 w-96 shadw-xl ">
              <div className="card-body">
                <input
                  type="text"
                  // placeholder="Title"
                  className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
                  {...register("title")}
                />
                <input
                  type="text"
                  // placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
                  {...register("description")}
                />
                <div className="card-actions justify-end">
                  <button className="btn btn-primary my-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="grid-cols-3 my-5">
          <GetNotes key={seed}></GetNotes>
        </div>
      </div>
    </>
  );
}

export default Profile;
