import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import buttonSearch from '../../asset/images/button_search.png'

const useStyles = makeStyles({
  input_search_container: {
    '&>span': {
      position: 'relative',
      '&>input': {
        boxSizing: 'border-box',
        width: '562px',
        height: '55px',
        fontWeight: 400,
        fontSize: '18px',
        color: '#777E90',
        border: '1px solid #3B71FE',
        borderRadius: '4px',
        padding: '16px',
      },
      '&>img': {
        width: '60px',
        height: '56px',
        borderRadius: '4px',
        position: 'absolute',
        right: 0,
        top: -20,
      },
    },
  },
})

const InputSearch = () => {
  const classes = useStyles()
  return (
    <div className={classes.input_search_container}>
      <span>
        <input placeholder='검색창.......' />
        <img src={buttonSearch} alt='' />
      </span>
    </div>
  )
}

export default InputSearch
