import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [priority, setPriority] = useState(""); // State to hold selected priority
const navigate = useNavigate()
  const handlePriorityChange = (e) => {
    setPriority(e.target.value); // Update state with selected priority
  };
const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('/home')
}

  return (
    <>
      <div className="container my-5">
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control w-50"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Enter Title..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control w-50"
            ></textarea>
          </div>

          {/* Dropdown/Select input for priority */}
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              className="form-control w-50"
              id="priority"
              value={priority}
              onChange={handlePriorityChange}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
