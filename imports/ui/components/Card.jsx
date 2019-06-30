import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ThumbDownIcon from "@material-ui/icons/ThumbDownOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUpOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIconFilled from "@material-ui/icons/Favorite";
import { connect } from "react-redux";
import { changeRating } from "../actions/AppActions.js";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        <Card className={classes.card} align="center">
          {/* Food Description */}

          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                F
              </Avatar>
            }
            title={this.state.data.name}
            subheader={this.state.data.location.address}
            className={classes.header}
          />

          {/* Food Image */}

          <CardMedia className={classes.image} image="/bananas.png" />

          {/* Thumbs Up and Down Counter */}

          <CardActions disableSpacing>
            <IconButton onClick={this.onThumbsUpPressed}>
              <ThumbUpIcon />
            </IconButton>
            <Typography  variant="h5">
              {this.state.data.rating}
            </Typography>
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

            {/* Food Details */}

            <div className={classes.price}>
              <Typography variant="h6">{this.state.data.price} lb</Typography>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
const useStyles = theme => ({
  card: {
    width: 300,
    margin: "10px"
  },
  image: {
    width: "100%",
    height: 200,
    paddingBottom: "0%"
  },
  header: {
    height: 70
  },
  price: {
    alignSelf: "center"
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
