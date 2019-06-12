import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';


class CardComponent extends Component {

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
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Bananas
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              $5.99
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
                <ThumbUpIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Play/pause">
              <ThumbDownIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
               <FavoriteIcon className={classes.playIcon} />
            </IconButton>
          </div>
        </div>
      </Card>
      </div>
    );
  }
}
const useStyles = theme => ({
  card: {
    display: 'flex',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
});

const CardWrapped = withStyles(useStyles)(CardComponent);

export default CardWrapped;
