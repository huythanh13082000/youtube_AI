import {makeStyles} from '@material-ui/styles'
import React, {useRef} from 'react'

const useStyles = makeStyles({
  upload_file_container: {
    '&>input': {
      width: '100%',
      height: '48px',
      border: '1px solid #B1B5C4',
      borderRadius: '12px',
      fontWeight: 400,
      fontSize: '18px',
      color: '#70777F',
      padding: '0 1rem',
    },
  },
})

const UploadFile = () => {
  const classes = useStyles()
  const ref = useRef<any>(null)
  return (
    <div className={classes.upload_file_container}>
      <input
        placeholder='파일첨부(JPG,PNG,PDF, 최대 20MB)'
        onClick={() => ref && ref.current && ref.current.click()}
      />
      <input type='file' hidden ref={ref} />
    </div>
  )
}

export default UploadFile
