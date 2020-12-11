import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import './DialogComponent.css';

const DialogComponent = props => {
    return (
        <Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.open} maxWidth="md" fullWidth={true}>
            {props.children}
        </Dialog>
    )
}

export default DialogComponent

