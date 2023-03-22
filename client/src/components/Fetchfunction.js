const postFetch = (data)=>{
    fetch("http://localhost:5000/api/addnote", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "authorization":localStorage.getItem("token")
  
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
}
const editFetch = ({id,title,description})=>{
    fetch(`http://localhost:5000/api/updatenote/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
          "authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify({title,description}),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          //   setNotes(result);
        })
        .catch((err) => {
          console.log(err);
        });
}

const deleteFetch = (id)=>{
    fetch(`http://localhost:5000/api/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          //   setNotes(result);
        })
        .catch((err) => {
          console.log(err);
        });
}

module.exports={
    postFetch,
    deleteFetch,
    editFetch
}