import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  container_card_service: {
    margin: '0 1rem',
    padding: '32px 24px',
    gap: '10px',
    width: '25%',
    background: '#FFFFFF',
    boxShadow: '0px 4px 20px rgba(0, 102, 255, 0.25)',
    borderRadius: '10px',
    '&>div:nth-child(1)': {
      display: 'flex',
      justifyContent: 'center',
      '&>img': {
        width: '40%',
        margin: '0 auto',
      },
    },
    '&>p:nth-child(2)': {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '36px',
      textAlign: 'center',
      color: '#000000',
    },
    '&>p:nth-child(3)': {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
      color: '#374151',
    },
    '&>span:nth-child(4)': {
      display: 'flex',
      padding: '10px 16px',
      gap: '8px',
      width: '60%',
      height: '44px',
      borderRadius: '4px',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      alignItems: 'center',
      color: '#2C97EB',
      justifyContent: 'center',
      margin: '0 auto',
      border: '1px solid #2C97EB',
      cursor: 'pointer',
    },
    '&>span:nth-child(4):hover': {
      color: '#FFFFFF',
      background: '#2C97EB',
    },
  },
})

const CardService = (props: {
  url: string
  name: string
  description: string
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container_card_service}>
      <div>
        <img src={props.url} alt={props.url} />
      </div>
      <p>{props.name} </p>
      <p>{props.description}</p>
      <span>
        프로젝트 생성{' '}
        <ArrowRightAltOutlinedIcon style={{width: '15%', margin: '0'}} />
      </span>
    </div>
  )
}

export default CardService
