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
          <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
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
            <div className={classes.insideDetails}>
              <div className={classes.controls}>
                <IconButton>
                  <ThumbUpIcon className={classes.playIcon} />
                </IconButton>
                <IconButton>
                  <ThumbDownIcon className={classes.playIcon} />
                </IconButton>
                <IconButton
                  style={{ display: this.state.isFav ? "none" : "" }}
                  onClick={this.onFavPressed}
                >
                  <FavoriteIcon className={classes.playIcon} />
                </IconButton>
                <IconButton
                  style={{ display: this.state.isFav ? "" : "none" }}
                  onClick={this.onFavPressed}
                >
                  <FavoriteIconFilled />
                </IconButton>
              </div>
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
    flexDirection: "column",
    paddingBottom: "10px"
  },
  insideDetails:{
    flex: 1
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: "100px"
  },
  controls: {
    width: "200px",
    flex: 1
  }
});

const CardWrapped = withStyles(useStyles)(CardComponent);

export default CardWrapped;
