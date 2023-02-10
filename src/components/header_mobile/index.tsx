import {makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  container_header_mobile: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    color: 'white',
    height: 120,
    padding: '0 130px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>:nth-child(1)': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&>:nth-child(1)': {
        fontFamily: 'Anton',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '66px',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        cursor: 'pointer',
      },
    },
  },
})

const HeaderMobile = () => {
  const classes = useStyles()
  return (
    <div className={classes.container_header_mobile}>
      <div>
        <span>Greenapp</span>
      </div>
    </div>
  )
}

export default HeaderMobile
