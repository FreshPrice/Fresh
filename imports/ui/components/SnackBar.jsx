import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/PlaylistAdd";
import CheckedIcon from "@material-ui/icons/PlaylistAddCheck";

const variantIcon = {
  success: CheckCircleIcon
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const [isFav, setFav] = React.useState(false);

  function onFavPressed() {
    setFav(!isFav);
    setOpen(true);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <IconButton
        style={{ display: isFav ? "none" : "" }}
        onClick={onFavPressed}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        style={{ display: isFav ? "" : "none" }}
        onClick={onFavPressed}
      >
        <CheckedIcon />
      </IconButton>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="This item was successfully added!"
        />
      </Snackbar>
    </div>
  );
}
