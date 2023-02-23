import {makeStyles} from '@material-ui/styles'
import loading from '../../asset/gif/loading.gif'

const useStyles = makeStyles({
  loader_container: {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    backgroundColor: 'white',
    background: `white url("${loading}") center no-repeat`,
    opacity: '0.5',
    zIndex: 1,
    top: 0,
  },
})

const Loading = (props: {open: boolean}) => {
  const classes = useStyles()
  return (
    <>{props.open ? <div className={classes.loader_container}></div> : <></>}</>
  )
}

export default Loading
