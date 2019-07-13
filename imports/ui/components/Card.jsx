import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIconFilled from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { changeRating } from "../actions/AppActions.js";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.post,
      isFav: false,
      imageSrc: `/images/` + this.props.post.name + `.png`,
      showDetails: false,
      isLogginIn: false
    };
  }

  onFavPressed = () => {
    this.setState({ isFav: !this.state.isFav });
  };

  onThumbsUpPressed = () => {
    let item = this.state.data;
    item.rating = item.rating + 1;
    this.props.changeRating(item);
  };

  onThumbsDownPressed = () => {
    let item = this.state.data;
    item.rating = item.rating - 1;
    this.props.changeRating(item);
  };

  imageNotFoundError = () => {
    this.setState({ imageSrc: "/images/missing.png" });
  };

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {/* Thumbs Up and Down Counter */}
          <div className={classes.ratingArea}>
            <div className={classes.thumbs}>
              <IconButton onClick={this.onThumbsUpPressed}>
                <ThumbUpOutlinedIcon />
              </IconButton>
              <div className={classes.rating}>{this.state.data.rating}</div>
              <IconButton onClick={this.onThumbsDownPressed}>
                <ThumbDownOutlinedIcon />
              </IconButton>
              {/* TODO: Favorite icon is a part of the stretch goal to add wishlist, use later */}
              {/* <IconButton
                style={{ display: this.state.isFav ? "none" : "" }}
                onClick={this.onFavPressed}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                style={{ display: this.state.isFav ? "" : "none" }}
                onClick={this.onFavPressed}
              >
                {" "}
                
                <FavoriteIconFilled />
              </IconButton> */}
            </div>
          </div>
          {/* Food Image */}
          <img
            className={classes.image}
            src={this.state.imageSrc}
            onError={this.imageNotFoundError}
          />

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
              <div
                className={classes.insideDetails}
                onClick={this.toggleDetails}
              >
                <CardContent className={classes.content}>
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
              </div>
            )}
          </div>
          {this.props.currentUser ? (
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          ) : (
            ""
          )}
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
    maxHeight: "113px"
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
