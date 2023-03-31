import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import * as React from 'react'
import {useAppSelector} from '../../app/hooks'
import {selectSnackBar} from './snackbarSlice'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false)
  const snackbar = useAppSelector(selectSnackBar)
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  React.useEffect(() => {
    setOpen(snackbar.open)
  }, [snackbar])

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    >
      <Alert onClose={handleClose} severity={snackbar.type}>
        {snackbar.content}
      </Alert>
    </Snackbar>
  )
}
