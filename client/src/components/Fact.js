import React from "react";


function Fact(props) {
  const { id, source, username, text } = props;
  
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
