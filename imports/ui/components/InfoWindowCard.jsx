import React from "react";

class InfoWindowCard extends React.Component {
  render() {
    const item = this.props.item;
    return (
      //TODO: Actually style the card.
      <div>
        <div>{item.item}</div>
        <div>{item.price}</div>
      </div>
    );
  }
}

export default InfoWindowCard;
