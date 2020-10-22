import React, { Component, Fragment } from "react";
class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { handleChange, handleSubmit, item, editTodo } = this.props;
    return (
      <Fragment>
        <section className="card col-md-9 mx-auto my-2">
          <article className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group-inline">
                <label htmlFor="item">Add Item</label>
                <input
                  type="text"
                  className="form-control"
                  name="item"
                  placeholder="add Item"
                  id="item"
                  required
                  onChange={handleChange}
                  value={item}
                />
              </div>

              <div className="form-group-inline">
                <button
                  className={
                    editTodo
                      ? "btn btn-outline-primary my-3 float-right"
                      : "btn btn-success my-3 float-right"
                  }
                >
                  {editTodo ? "Edit Item" : "Add Item"}
                </button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default TodoInput;
