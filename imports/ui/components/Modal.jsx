import Button from "@material-ui/core/Button";
import MaterialModal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import FreshForm from "./FreshForm.jsx";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Modal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleOpen}>
          Add New Post
        </Button>

        <MaterialModal
          aria-labelledby="modal-title"
          aria-describedby="modal-to-add-new-deal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <FreshForm />
          </div>
        </MaterialModal>
      </div>
    );
  }
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4)
  }
});

// We need an intermediary variable for handling the recursive nesting.
const ModalWrapped = withStyles(styles)(Modal);

export default ModalWrapped;
