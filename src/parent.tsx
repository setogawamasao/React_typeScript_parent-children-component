import React from "react";
import Child from "./child";

interface ParentState {
  parentValue: string;
}

class Parent extends React.Component<{}, ParentState> {
  constructor(props: any) {
    super(props);

    this.state = { parentValue: "I'm parent state" };
    this.onchangeParentValue = this.onchangeParentValue.bind(this);
  }

  onchangeParentValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ parentValue: event.target.value });
  };

  setParentValue = (value: string): void => {
    this.setState({ parentValue: value });
  };

  render() {
    return (
      <>
        <h1>Parent</h1>
        <div>
          <label>parent_state_value_: </label>
          <input
            type="text"
            onChange={(event): void => this.onchangeParentValue(event)}
            value={this.state.parentValue}
          ></input>
        </div>
        <Child
          parentValue={this.state.parentValue}
          setPaerntValue={this.setParentValue}
        />
      </>
    );
  }
}

export default Parent;
