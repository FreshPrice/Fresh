import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { deleteAllCheckList } from "../actions/AppActions.js";

class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      confirm: false,
      email: Meteor.user().emails[0].address,
      password: "",
      error: false,
      helperText: ""
    };
  }
  handleChangeField = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.password === this.state.email
      ? this.removeAll()
      : this.setState({
          open: true,
          error: true,
          helperText: "Incorrect, please enter the correct email."
        });
  };

  removeAll = () => {
    this.setState({ open: false });
    this.props.deleteAllCheckList();
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
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Delete All
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">
              Are you sure you want to delete everything on the list?
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To delete all, please confirm by entering your email.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                fullWidth
                onChange={this.handleChangeField}
                value={this.state.password}
                error={this.state.error}
                helperText={this.state.helperText}
              />
            </DialogContent>
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
  { deleteAllCheckList }
)(FormDialog);
