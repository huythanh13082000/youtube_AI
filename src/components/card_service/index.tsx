import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
import {makeStyles} from '@mui/styles'
import multiscreen from '../../asset/images/multiscreen.png'

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
      background: '#2C97EB',
      borderRadius: '4px',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      alignItems: 'center',
      color: '#FFFFFF',
      justifyContent: 'center',
      margin: '0 auto',
    },
  },
})

const CardService = () => {
  const classes = useStyles()
  return (
    <div className={classes.container_card_service}>
      <div>
        <img src={multiscreen} alt='multiscreen' />
      </div>
      <p>반응형 웹</p>
      <p>디자인 감각이 없어도 훌륭한 반응형 웹사이트를 만들 수 있습니다.</p>
      <span>
        프로젝트 생성{' '}
        <ArrowRightAltOutlinedIcon style={{width: '15%', margin: '0'}} />
      </span>
    </div>
  )
}

export default CardService
