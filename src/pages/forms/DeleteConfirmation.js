import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './text.css'
 
const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, type, message }) => {
    return (
      <div>
      <Dialog open={showModal} onHide={hideModal}>
            <div className="some-class-2">
        <DialogTitle className="form-header" >
        Delete Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
        
          <div className="alert alert-danger">{message}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button className='button muted-button' variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button className='button muted-button' variant="danger" onClick={() => confirmModal(type, id) }>
            Delete
          </Button>
        </DialogActions>
        </div>
      </Dialog>
     </div>
    )
}
 
export default DeleteConfirmation;