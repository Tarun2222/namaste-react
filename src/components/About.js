import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {(value) => <div>{value.loggedInUser}</div>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Tarundeep Class"} location={"Ambala Class"} />
      </div>
    );
  }
}
export default About;
