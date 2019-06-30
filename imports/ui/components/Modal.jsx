import MaterialModal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import FreshForm from "./FreshForm.jsx";
import "./Modal.css";

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

  handleSubmit = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Fab
          color="secondary"
          aria-label="Edit"
          className="NewPostFab"
          onClick={this.handleOpen}
        >
          <AddIcon />
        </Fab>

        <MaterialModal
          aria-labelledby="modal-title"
          aria-describedby="modal-to-add-new-deal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper} >
            <FreshForm closeModalOnSubmit={this.handleSubmit}/>
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
    padding: theme.spacing(4),
    height: "400px"
  }
});

// We need an intermediary variable for handling the recursive nesting.
const ModalWrapped = withStyles(styles)(Modal);

export default ModalWrapped;
