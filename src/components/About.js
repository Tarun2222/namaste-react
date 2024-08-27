import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Tarundeep Function"}/> */}
        <UserClass name={"Tarundeep Class"} location={"Ambala Class"} />
      </div>
    );
  }
}
export default About;
