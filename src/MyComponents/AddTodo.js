import React, { useState } from "react";

const AddTodo = (props) => {
  const [notes, setNotes] = useState({
    title: "",
    desc: "",
  });

  const submit = (event) => {
    event.preventDefault();
    if (!notes.title || !notes.desc) {
      alert("Title or Description can't be blank");
    } else {
      props.addTodo(notes.title, notes.desc);
      console.log(notes);
    }
    notes.title = "";
    notes.desc = "";
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNotes({ ...notes, [name]: value });
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={notes.title}
            onChange={handleChange}
            className="form-control"
            name="title"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={notes.desc}
            onChange={handleChange}
            className="form-control"
            name="desc"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
};

export default AddTodo;
