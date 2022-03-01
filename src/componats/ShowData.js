import React, { useEffect, useState }
 from "react";
 import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css'
function ShowData() {
  const [state, setState] = useState([]);
  const [word, setword] = useState();
  


  useEffect(() => {
    axios
      .get("http://localhost:3001/post")
      .then((data) => {
        console.log(data["data"]);
        setState(data["data"]);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  function delete1(id) {
      console.log(id)
    axios
      .delete(`http://localhost:3001/post/${id}`)
      
        const delete1 = state.filter((ele)=>{
            return ele.id != id
         })
         setState(delete1)
     
  }

  function searchData(e){
    setword(e.target.value)
    axios.get("http://localhost:3001/post?q="+word).then((data) => {
      console.log(data["data"]);
      setState(data["data"]);
    });
  }

  return (
    <div className="container" style={{ marginTop: "150px" }}>
    <form className="d-flex">
          <input
            className="form-control me-6"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={searchData}
         
          />

          <button

            className="btn btn-success"
            type="submit"
          >
            <Link   style={{ textDecoration: 'none'}} to="AddData">AddEmployees</Link>
          </button>
        </form>

      <table className="table table-dark table-striped my-3"  >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col" style={{ width: "200px" }}>
              Methods
            </th>
          </tr>
        </thead>
        <tbody>
          {state.map((ele, id) => {
            return (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{ele.fname}</td>
                <td>{ele.lname}</td>
                <td>{ele.email}</td>

                <td>
                  <button
                  onClick={() => {
                    delete1(ele.id);
                  }}
                    type="button"
                    className="btn btn-outline-success mx-1"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>


                  <button
                    type="button"
                    className="btn btn-outline-success  mx-1">
                    <Link to={`/Edit/${ele.id}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  </button>


                  <button
                    type="button"className="btn btn-outline-success  mx-1">
                    <Link to={`/View/${ele.id}`}>
                    <i className="bi bi-eye-fill"></i>
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
