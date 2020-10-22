import React, { Fragment } from "react";

const TodoList = (props) => {
  let { items, handleDelete, handleEdit } = props;
  return (
    <div className="col-md-9 mx-auto card">
      <h1 className="display-5 text-uppercase font-weight-bold text-success my-4">
        List of Todo's
      </h1>
      {items.map((todo) => (
        <Fragment key={todo.id}>
          <ul className="list-group">
            <li className="list-group-item mb-2">
              <span>{todo.item}</span>
              <span className="float-right btn-group">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(_) => handleDelete(todo.id)}
                >
                  delete
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={(_) => handleEdit(todo.id)}
                >
                  Edit
                </button>
              </span>
            </li>
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default TodoList;
