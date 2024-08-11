import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const Title = () => (
  //component
  <h1 className="head" tabIndex="5">
    {elem} <br></br>
    Namaste React by JSX
  </h1>
);

const Title2 = (
  <h1 className="head2" tabIndex="5">
    Testing
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title /> 
    {Title2}
    {Title()}
    <h1 id="heading">Namaste React by Functional</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
