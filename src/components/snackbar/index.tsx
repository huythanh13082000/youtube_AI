import Snackbar from '@material-ui/core/Snackbar'
import {makeStyles, Theme} from '@material-ui/core/styles'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import React from 'react'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function CustomizedSnackbars(props: {
  content: string
  type?: 'error' | 'warning' | 'success' | 'info'
  open: boolean
  setOpen:()=>void
}) {
  const classes = useStyles()
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    props.setOpen()
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={props.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      >
        <Alert onClose={handleClose} severity={props.type}>
          {props.content}
        </Alert>
      </Snackbar>
    </div>
  )
}
