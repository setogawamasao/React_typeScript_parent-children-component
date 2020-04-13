import React from "react";

class Child extends React.Component<
  {
    parentValue: string;
    setPaerntValue: (value: string) => void;
  },
  {}
> {
  setChildValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setPaerntValue(event.target.value);
  };

  render() {
    return (
      <>
        <h1>Child</h1>
        <label>child__props_value_: </label>
        <input
          type="text"
          value={this.props.parentValue}
          onChange={(event): void => this.setChildValue(event)}
        ></input>
      </>
    );
  }
}

export default Child;
