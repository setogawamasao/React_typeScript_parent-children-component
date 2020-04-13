import React from "react";

class ChildArray extends React.Component<
  {
    parentValue: string[];
    setPaerntValue: (value: string[]) => void;
  },
  {}
> {
  add = () => {
    const buffer: string[] = this.props.parentValue.slice();
    buffer.push("Y");
    this.props.setPaerntValue(buffer);
  };

  render() {
    return (
      <>
        <div>
          <h1>Child Array</h1>
          <label>child__props_array_: </label>
          <input type="text" value={this.props.parentValue}></input>
          <input
            type="button"
            onClick={(): void => this.add()}
            value="add Y"
          ></input>
        </div>
      </>
    );
  }
}

export default ChildArray;
