import React, { useState , useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions } from '@mui/material'

function AlertBox({ content, alert , callbackClose }) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        
        setOpen(alert)
    
    }, [alert])

    const handdleClose = () => {
        setOpen(false)
        callbackClose()
    }
    

    return (
        <Dialog
            open={open}
            onClose={() => {}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                แจ้งเตือน
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='error' variant='contained' onClick={handdleClose} autoFocus>
                    ปิด
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlertBox