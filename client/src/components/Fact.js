import React from "react";
import FactForm from "./FactForm";

function Fact(props) {
  const { id, source, username, text } = props;
  console.log(username);
  return (
    <div className="fact-container">
      <h1>
        id {id}: {text}{" "}
      </h1>
      {/* <FactForm id={id} text={text} source={source} userName={username} /> */}
    </div>
  );
}

export default Fact;
