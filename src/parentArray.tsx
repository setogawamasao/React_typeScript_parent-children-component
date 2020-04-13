import React from "react";
import ChildArray from "./childArray";

interface ParentState {
  parentValue: string[];
}

class ParentArray extends React.Component<{}, ParentState> {
  constructor(props: any) {
    super(props);

    this.state = { parentValue: ["A", "B", "C"] };
    this.add = this.add.bind(this);
  }

  add = () => {
    const buffer: string[] = this.state.parentValue.slice();
    buffer.push("X");
    this.setState({ parentValue: buffer });
  };

  setParentValue = (values: string[]): void => {
    this.setState({ parentValue: values });
  };

  render() {
    return (
      <>
        <h1>Parent Array</h1>
        <div>
          <label>parent_state_array_: </label>
          <input type="text" value={this.state.parentValue}></input>
          <input
            type="button"
            onClick={(): void => this.add()}
            value="add X"
          ></input>
        </div>
        <ChildArray
          parentValue={this.state.parentValue}
          setPaerntValue={this.setParentValue}
        />
      </>
    );
  }
}

export default ParentArray;
