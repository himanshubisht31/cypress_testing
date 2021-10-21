import React from "react";

const TaskForm = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      autoFocus
  
      placeholder="Add something"
      value={value}
      onChange={onChange}
    />

    <input type="submit" value='submit' />

  </form>
);

export default TaskForm;