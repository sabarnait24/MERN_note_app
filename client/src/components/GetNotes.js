import React, { useEffect, useState } from "react";
import { deleteFetch } from "./Fetchfunction";
function GetNotes(props) {
  const [notes, setNotes] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/getnote", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setNotes(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // let notes=props.notes;
  console.log(notes);
  let getNotes = notes.map((v, i) => (
    <GetAllNotes key={i} value={v}></GetAllNotes>
  ));
  // console.log(seed);

  return <div className="flex flex-row">{getNotes}</div>;
}

function GetAllNotes({ value }) {
  // const [seed, setSeed] = useState(1);
  const handleDeleteNotes = (id) => {
    console.log(id);
    deleteFetch(id);
    // GetNotes();
    
    // setSeed(prev => prev+1);
    
  };

  return (
    <div className="mx-4">
      <div>
        <div className="card card-compact  bg-slate-50 w-96 shadw-xl ">
          <div className="card-body">
            <input
              type="text"
              value={value.title}
              // placeholder="Title"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
            />
            <input
              type="text"
              value={value.description}
              // placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-slate-200 my-2 mx-2 text-black"
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary my-2"
                onClick={() =>
                  handleDeleteNotes(value._id, value.title, value.description)
                }
              >
                Edit
              </button>
              <button
                className="btn btn-primary my-2"
                onClick={() => handleDeleteNotes(value._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetNotes;
