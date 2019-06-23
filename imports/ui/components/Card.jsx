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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {/* Thumbs Up and Down Counter */}
          <div className={classes.rating}>
            <div className={classes.thumbs}>
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
              <div className={classes.count}>{this.state.data.count}</div>
              <IconButton>
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
          <CardMedia className={classes.image} image="/bananas.png" />
          {/* Food Details */}
          <div className={classes.details}>
            <div className={classes.insideDetails}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {this.state.data.item}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {this.state.data.price}
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
    backgroundColor: "rgba(52, 52, 52, 0.1)"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  insideDetails: {
    flex: 1
  },
  content: {
    flex: "1 0 auto"
  },
  image: {
    width: "100px"
  },
  rating: {
    display: "flex"
  },
  count: {
    flex: 1,
    alignSelf: "center",
    fontSize: "20px"
  },
  thumbs: {
    width: "50px",
    flex: 1
  }
});

const CardWrapped = withStyles(useStyles)(CardComponent);

export default CardWrapped;
