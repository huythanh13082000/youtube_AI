import {makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  container_input_base: {
    width: '100%',
    '&>label': {
      display: 'inline-block',
      marginBottom: '10px',
      marginTop: '10px',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '27px',
      color: '#111827',
      '&>span': {
        color: '#2C97EB',
      },
    },
    '&>input': {
      width: '100%',
      height: '42px',
      fontFamily: 'Pretendard',
      paddingLeft: '10px',
      border: '1px solid #9CA3AF',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
  },
  '@media (max-width: 740px)': {
    container_input_base: {
      width: '100%',
      '&>label': {
        display: 'inline-block',
        marginBottom: '10px',
        marginTop: '10px',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#111827',
        '&>span': {
          color: '#2C97EB',
        },
      },
      '&>input': {
        width: '100%',
        height: '42px',
        fontFamily: 'Pretendard',
        paddingLeft: '10px',
        border: '1px solid #9CA3AF',
        borderRadius: '4px',
        boxSizing: 'border-box',
      },
    },
  },
})

const InputBase = (props: {
  label: string
  placeholder: string
  require?: boolean
  onChange: (event: any) => void
  type?: 'text' | 'number'
  disable?: boolean
  value?: string|number
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container_input_base}>
      <label htmlFor={props.label}>
        {props.label} {props.require && <span>*</span>}
      </label>
      <br />
      <input
        value={props.value}
        type={props.type ? props.type : 'text'}
        id={props.label}
        placeholder={props.placeholder}
        required={props.require}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  )
}

export default InputBase
