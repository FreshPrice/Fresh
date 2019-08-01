import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownSolidIcon from "@material-ui/icons/ThumbDown";
import ThumbUpSolidIcon from "@material-ui/icons/ThumbUp";
import { connect } from "react-redux";
import { changeRating } from "../actions/AppActions.js";
import AddShoppingList from "./SnackBar";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.post,
      imageSrc: this.props.post.imageSrc,
      showDetails: false,
      isLightboxOpen: false,
      thumbsUpIcon: "outline",
      thumbsDownIcon: "outline"
    };
  }

  onThumbsUpOutlinedPressed = () => {
    let item = this.state.data;
    item.rating = item.rating + 1;
    this.props.changeRating(item);
    if (this.state.thumbsDownIcon == "solid") {
      this.setState({ thumbsDownIcon: "outline" });
    } else {
      this.setState({ thumbsUpIcon: "solid" });
    }
  };

  onThumbsDownOutlinedPressed = () => {
    let item = this.state.data;
    item.rating = item.rating - 1;
    this.props.changeRating(item);
    if (this.state.thumbsUpIcon == "solid") {
      this.setState({ thumbsUpIcon: "outline" });
    } else {
      this.setState({ thumbsDownIcon: "solid" });
    }
  };

  onThumbsUpSolidPressed = () => {
    let item = this.state.data;
    item.rating = item.rating - 1;
    this.props.changeRating(item);
    this.setState({ thumbsUpIcon: "outline" });
  };

  onThumbsDownSolidPressed = () => {
    let item = this.state.data;
    item.rating = item.rating + 1;
    this.props.changeRating(item);
    this.setState({ thumbsDownIcon: "outline" });
  };

  imageNotFoundError = () => {
    this.setState({ imageSrc: "/images/missing.png" });
  };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  openImageLightbox = () => {
    this.setState({ isLightboxOpen: true });
  };

  render() {
    const { classes } = this.props;
    const isLightboxOpen = this.state.isLightboxOpen;

    return (
      <div>
        <Card className={classes.card}>
          {/* Thumbs Up and Down Counter */}
          <div className={classes.ratingArea}>
            {this.state.thumbsUpIcon == "outline" ? (
              <div className={classes.thumbs}>
                <IconButton onClick={this.onThumbsUpOutlinedPressed}>
                  <ThumbUpOutlinedIcon />
                </IconButton>
              </div>
            ) : (
              <div className={classes.thumbs}>
                <IconButton onClick={this.onThumbsUpSolidPressed}>
                  <ThumbUpSolidIcon />
                </IconButton>
              </div>
            )}
            <div className={classes.rating}>{this.state.data.rating}</div>
            {this.state.thumbsDownIcon == "outline" ? (
              <div className={classes.thumbs}>
                <IconButton onClick={this.onThumbsDownOutlinedPressed}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </div>
            ) : (
              <div className={classes.thumbs}>
                <IconButton onClick={this.onThumbsDownSolidPressed}>
                  <ThumbDownSolidIcon />
                </IconButton>
              </div>
            )}
          </div>
          {/* Food Image */}
          <img
            onClick={this.openImageLightbox}
            className={classes.image}
            src={this.state.imageSrc}
            onError={this.imageNotFoundError}
          />
          {isLightboxOpen && (
            <Lightbox
              mainSrc={this.state.imageSrc}
              onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            />
          )}

          {/* Food Details */}
          <div className={classes.details}>
            {this.state.showDetails && this.state.data.location.address ? (
              // Address Only Side
              <CardActions
                onClick={this.toggleDetails}
                className={classes.addressOnly}
              >
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    {this.state.data.location.address}
                  </Typography>
                </CardContent>
              </CardActions>
            ) : (
              // All Card Details Info
              <div className={classes.insideDetails}>
                <CardContent
                  className={classes.content}
                  onClick={this.toggleDetails}
                >
                  <Typography component="h5" variant="h5">
                    {this.state.data.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    ${this.state.data.price} {this.state.data.unit}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.longAddress}
                    color="textSecondary"
                  >
                    {this.state.data.location.address}
                  </Typography>
                </CardContent>
                {this.props.currentUser && (
                  <AddShoppingList
                    currentUser={this.props.currentUser}
                    item={this.state.data}
                  />
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }
}
const useStyles = theme => ({
  card: {
    display: "flex",
    marginBottom: "4%",
    maxHeight: "113px",
    "&:hover": {
      border: "2.5px solid #F50057",
      cursor: "pointer"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1
  },
  longAddress: {
    margin: "auto",
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  addressOnly: {
    margin: "auto",
    flexGrow: 1
  },
  insideDetails: {
    maxHeight: "113px",
    position: "relative"
  },
  content: {
    flex: "1 0 auto"
  },
  image: {
    maxWidth: "113px",
    minWidth: "113px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  ratingArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  rating: {
    flex: 1,
    alignSelf: "left",
    fontSize: "20px",
    justifyItems: "center"
  },
  thumbs: {}
});

const CardWrapped = withStyles(useStyles)(CardComponent);

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(
  mapStateToProps,
  { changeRating }
)(CardWrapped);
