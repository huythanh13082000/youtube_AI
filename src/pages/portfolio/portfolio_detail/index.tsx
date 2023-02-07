import {makeStyles} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles({
  container_portfolio_detail: {
    padding: '44px 100px 40px',
    '&>div:nth-child(1)': {
      display: 'flex',
      position: 'relative',
      '&>img:nth-child(1)': {
        width: '80px',
        height: '80px',
        borderRadius: '10px',
        marginRight: '16px',
      },
      '&>div:nth-child(2)': {
        '&>p': {
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '42px',
          margin: '0',
        },
        '&>p:nth-child(2)': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#D97706',
        },
      },
      '&>span:nth-child(3)': {
        position: 'absolute',
        top: '-32px',
        right: '-88px',
      },
      '&>p': {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
        color: '#4B5563',
      },
      '&>img': {
        width: '100%',
        objectFit: 'cover',
      },
    },
  },
})

export const PortfolioDetail = (props: {
  open: boolean
  setOpen: () => void
}) => {
  const classes = useStyles()
  const handleClose = () => {
    props.setOpen()
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='lg'
    >
      <div className={classes.container_portfolio_detail}>
        <div>
          <img src='' alt='' />
          <div>
            <p>부경샵</p>
            <p>Android/ IOS</p>
          </div>
          <span onClick={() => handleClose()}>
            <CancelIcon style={{fontSize: '40px'}} />
          </span>
        </div>
        <p>이앱은 무무슨 앱입니다</p>
        <p>프로젝트 기간은 6개월</p>
        <p>비용은 3000만원으로 제작되었습니다</p>
        <p>고객님은 광고효과를 위해 사이드서버랜더링</p>
        <p>방식을 채택하여 제작하였습니다</p>
        <img
          src='https://cdn.tgdd.vn/2020/08/content/cach-dung-google-translate-dich-van-ban-hinh-anh-giong-noi-thumb-800x450.jpg'
          alt=''
        />
      </div>
    </Dialog>
  )
}
