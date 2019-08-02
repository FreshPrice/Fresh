import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { deleteOneCheckList } from "../actions/AppActions.js";

class DeleteOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.removeOne();
  };

  removeOne = () => {
    this.setState({ open: false });
    this.props.deleteOneCheckList(this.props.itemId);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          size="small"
          variant="outlined"
          style={{
            display: this.props.clicked ? "" : "none",
            marginRight: "10px"
          }}
          onClick={this.handleClickOpen}
        >
          Remove
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">
              Are you sure you want to remove this item?
            </DialogTitle>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Confirm
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteOneCheckList }
)(DeleteOne);
