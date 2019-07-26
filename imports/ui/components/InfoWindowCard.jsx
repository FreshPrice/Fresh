import React from "react";
import { withStyles } from "@material-ui/core/styles";

class InfoWindowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.item.imageSrc
    };
  }

  determineSource = () => {
    let imageSrc = this.state.imageSrc;
    let image = new Image();
    image.src = this.state.imageSrc;
    if (!image.complete) {
      imageSrc = "/images/missing.png";
    } else if (image.height === 0) {
      imageSrc = "/images/missing.png";
    }
    return imageSrc;
  };

  render() {
    const { classes } = this.props;
    const item = this.props.item;
    const locationName = item.location.address.substr(
      0,
      item.location.address.indexOf(",")
    );
    return (
      <div className={classes.infoWindow}>
        <div className={classes.infoWindowDetails}>
          <img
            className={classes.infoWindowImage}
            src={this.determineSource()}
          />
          <div className={classes.infoWindowText}>
            <b>{item.name}</b>
            <br /> ${item.price} {item.unit}
            <br /> {locationName}
          </div>
        </div>
      </div>
    );
  }
}

const useStyles = theme => ({
  infoWindow: {
    display: "flex",
    maxWidth: "160px"
  },
  infoWindowImage: {
    height: "50px",
    width: "50px",
    flex: 1
  },
  infoWindowDetails: {
    display: "flex",
    flex: 1,
    paddingRight: "10px",
    paddingBottom: "10px",
    whiteSpace: "nowrap",
    alignItems: "center",
    margin: "auto"
  },
  infoWindowText: {
    textOverflow: "ellipsis",
    textAlign: "right",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "60px",
    maxWidth: "100px"
  }
});

const InfoWindowCardWrapped = withStyles(useStyles)(InfoWindowCard);

export default InfoWindowCardWrapped;
