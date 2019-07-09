import React from "react";
import { withStyles } from "@material-ui/core/styles";

class InfoWindowCard extends React.Component {
  render() {
    const { classes } = this.props;
    const item = this.props.item;

    return (
      //TODO: Actually style the card.
      <div className={classes.infoWindow}>
        <div className={classes.mapDetails}>
          <img className={classes.mapImage} src="/images/Bananas.png" />
          <br />
          <b>{item.name}</b>
          <br />${item.price} {item.unit}
        </div>
      </div>
    );
  }
}

const useStyles = theme => ({
  infoWindow: {
    display: "flex",
    minWidth: "150px"
  },
  mapImage: {
    height: "50px",
    flex: 1
  },
  mapDetails: {
    flex: 1,
    alignItem: "center",
    paddingRight: "10px",
    whiteSpace: "nowrap"
  }
});

const InfoWindowCardWrapped = withStyles(useStyles)(InfoWindowCard);

export default InfoWindowCardWrapped;
