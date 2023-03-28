import {Input, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  input_textarea_container: {
    width: '100%',
    '&>p': {
      textAlign: 'end',
    },
  },
})

const InputTextarea = (props: {
  value?: string
  onChange: (e: any) => void
  placeholder?: string
  maxLength?: number
}) => {
  const classes = useStyles()
  return (
    <div className={classes.input_textarea_container}>
      <Input
        id='standard-adornment-weight'
        placeholder={props.placeholder}
        inputProps={{
          'aria-label': 'weight',
        }}
        fullWidth
        style={{fontSize: '18px'}}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        maxRows={2}
      />
      <p>
        {props.value?.length}/{props.maxLength || 30}
      </p>
    </div>
  )
}

export default InputTextarea
