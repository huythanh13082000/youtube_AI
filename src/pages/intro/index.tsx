import {makeStyles} from '@material-ui/styles'
import {LIST_IMAGE_INTRO} from '../../constants'

const useStyles = makeStyles({
  intro_container: {
    '&>div:nth-child(1)': {
      height: '120px',
      background: 'black',
    },
    '&>div:nth-child(2)': {
      padding: '20px 130px',
      '&>img': {
        width: '100%',
      },
    },
  },
  '@media (max-width: 740px)': {
    intro_container: {
      '&>div:nth-child(1)': {
        height: '65px',
        background: 'black',
      },
      '&>div:nth-child(2)': {
        padding: '20px 16px',
        '&>img': {
          width: '100%',
        },
      },
    },
  },
  '@media (min-width: 740px) and (max-width: 1185px)': {
    intro_container: {
      '&>div:nth-child(1)': {
        height: '65px',
        background: 'black',
      },
      '&>div:nth-child(2)': {
        padding: '20px 60px',
        '&>img': {
          width: '100%',
        },
      },
    },
  },
})

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.intro_container}>
      <div></div>
      <div>
        {LIST_IMAGE_INTRO.map((item) => (
          <img key={item} src={item} alt='' />
        ))}
      </div>
    </div>
  )
}

export default Intro
