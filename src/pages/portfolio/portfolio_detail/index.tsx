import {makeStyles} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import CancelIcon from '@material-ui/icons/Cancel'
import {BASE_URL} from '../../../constants'
import {PortfolioType} from '../../../types/portfolio.type'

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
  '@media (max-width: 740px)': {
    container_portfolio_detail: {
      padding: '44px 16px 40px',
      boxSizing: 'border-box',
      '&>div:nth-child(1)': {
        display: 'flex',
        position: 'relative',
        '&>img:nth-child(1)': {
          width: '55px',
          height: '55px',
          borderRadius: '10px',
          marginRight: '16px',
        },
        '&>div:nth-child(2)': {
          '&>p': {
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '30px',
            margin: '0',
          },
          '&>p:nth-child(2)': {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '21px',
            color: '#D97706',
          },
        },
        '&>span:nth-child(3)': {
          position: 'absolute',
          top: '-32px',
          right: '-7px',
          '&>svg': {
            width: '30px',
          },
        },
        '&>p': {
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '21px',
          color: '#4B5563',
        },
        '&>img': {
          width: '100%',
          objectFit: 'cover',
        },
      },
      '&>p': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '21px',
        color: '#4B5563',
      },
    },
  },
})

export const PortfolioDetail = (props: {
  open: boolean
  setOpen: () => void
  data: PortfolioType
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
          <img src={`${BASE_URL}/${props.data.logo}`} alt='' />
          <div>
            <p>{props.data.title}</p>
            <p>{props.data.programming_language}</p>
          </div>
          <span onClick={() => handleClose()}>
            <CancelIcon style={{fontSize: '40px'}} />
          </span>
        </div>
        <p>{props.data.description}</p>
        {(props.data.images as string[]).map((item) => (
          <img style={{width: '100%'}} src={`${BASE_URL}/${item}`} alt='' />
        ))}
      </div>
    </Dialog>
  )
}
