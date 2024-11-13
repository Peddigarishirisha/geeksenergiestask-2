import React from "react";
import "./sort.css";

const Sort = () => {
  return (
    <div className="sort">
      <button>
       <img src="/frame.png" ></img> Sort by
      </button>
      <button>
        <img src="/filter.png"></img>Filter
      </button>
    </div>
  );
};

export default Sort;
