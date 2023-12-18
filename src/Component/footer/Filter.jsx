import React from "react";

const Filter = () => {
  return (
    <form className="filter">
      <div className="filter-status">
        <h3>Filter by status</h3>
        <div className="filter-item">
          <input type="radio" name="status" id="all" value="all" />
          <label htmlFor="">All</label>
        </div>
        <div className="filter-item">
          <input type="radio" name="status" id="completed" value="completed" />
          <label htmlFor="">Completes</label>
        </div>
        <div className="filter-item">
          <input type="radio" name="status" id="active" value="active" />
          <label htmlFor="">Active</label>
        </div>
      </div>

      <div className="filter-color">
        <h3>Filter by Color</h3>
        <div className="filter-item">
          <input type="checkbox" name="colors" id="green" value="green" />
          <label htmlFor="">Green</label>
        </div>

        <div className="filter-item">
          <input type="checkbox" name="colors" id="blue" value="blue" />
          <label htmlFor="">Blue</label>
        </div>

        <div className="filter-item">
          <input type="checkbox" name="colors" id="yellow" value="yellow" />
          <label htmlFor="">Yellow</label>
        </div>
      </div>
    </form>
  );
};

export default Filter;
