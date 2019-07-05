import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIconFilled from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { changeRating } from "../actions/AppActions.js";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.post,
      isFav: false
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {/* Thumbs Up and Down Counter */}
          <div className={classes.ratingArea}>
            <div className={classes.thumbs}>
              <IconButton onClick={this.onThumbsUpPressed}>
                <ThumbUpIcon />
              </IconButton>
              <div className={classes.rating}>{this.state.data.rating}</div>
              <IconButton onClick={this.onThumbsDownPressed}>
                <ThumbDownIcon />
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
          <CardMedia
            className={classes.image}
            image={`/images/` + this.state.data.name + `.png`}
          />
          {/* Food Details */}
          <div className={classes.details}>
            <div className={classes.insideDetails}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {this.state.data.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  ${this.state.data.price} {this.state.data.unit}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {this.state.data.location.address}
                </Typography>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
const useStyles = theme => ({
  card: {
    display: "flex",
    marginBottom: "5%"
  },
  details: {
    width: "150px",
    height: "150px"
  },
  insideDetails: {},
  content: {
    flex: "1 0 auto"
  },
  image: {
    width: "160px"
  },
  ratingArea: {
    display: "flex"
  },
  rating: {
    flex: 1,
    alignSelf: "left",
    fontSize: "20px"
  },
  thumbs: {
    width: "50px",
    flex: 1
  }
});

const CardWrapped = withStyles(useStyles)(CardComponent);

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(
  mapStateToProps,
  { changeRating }
)(CardWrapped);
