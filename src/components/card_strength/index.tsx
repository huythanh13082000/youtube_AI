import {makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  container_card_strength: {
    padding: '16px',
    display: 'flex',
    width: '49%',
    boxSizing: 'border-box',
    alignItems: 'center',
    background: '#FFFFFF',
    border: '1px solid #9CA3AF',
    borderRadius: '4px',
    margin: '1% 0',
    '&>img:nth-child(1)': {
      marginRight: '1rem',
      width: '60px',
      height: '60px',
    },
    '&>div:nth-child(2)': {
      '&>p:nth-child(1)': {
        fontWeight: 700,
        fontSize: '18px;',
        lineHeight: '27px',
        color: '#1F2937',
        margin: 0,
        marginTop: '6px',
      },
      '&>p:nth-child(2)': {
        fontWeight: 400,
        fontSize: '16px;',
        lineHeight: '24px',
        color: '#4B5563',
        marginTop: '6px',
      },
    },
  },
  '@media (max-width: 740px)': {
    container_card_strength: {
      padding: '16px',
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      alignItems: 'center',
      background: '#FFFFFF',
      border: '1px solid #9CA3AF',
      borderRadius: '4px',
      margin: '1% 0',
    },
  },
})

const CardStrength = (props: {
  url: string
  name: string
  description: string
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container_card_strength}>
      <img src={props.url} alt={props.name} />
      <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CardStrength
