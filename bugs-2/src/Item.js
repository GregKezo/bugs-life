import React from "react";

 const  Item = (props) => {
  return (
    <div className="item">
      <input type="checkbox" />
      {props.item}
    </div>
  );
}


export default Item