import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Home = () => {
 
  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "The Task has been deleted.", "success");
        }
      });
};
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container p-2">
        <Link className="navbar-brand" to={"#"}>
          Magnet Brains
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-success my-2 my-sm-0" to={"/"}>
              LogOut
            </Link>
          </form>
        </div>
      </nav>
      {/* show all task specific user  */}
      <section className="container">
        <div className="d-flex justify-content-between my-4">
          <div>
            <h1>All task</h1>
          </div>
          <Link to={"/add-task"} className="btn btn-primary btn-lg">
            Add Task
          </Link>
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">SN.</th>
              <th scope="col">Title</th>
              <th scope="col">Due Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <select
                  className="form-select w-50 m-0"
                  aria-label="Default select example"
                >
                  <option selected>Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </td>

              <td>
               
                <button className="btn btn-info m-1">View</button>
                <button className="btn btn-warning m-1">Edit</button>
                <button className="btn btn-danger m-1" onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Home;
