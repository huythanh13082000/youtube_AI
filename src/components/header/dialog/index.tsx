import Dialog from '@material-ui/core/Dialog'
import {makeStyles} from '@material-ui/core'
import {useLocation, useNavigate} from 'react-router-dom'
import {ROUTE} from '../../../router/routes'

const useStyles = makeStyles({
  container_dialog_menu: {
    '& .MuiPaper-root': {
      background: 'none',
    },
    '& .MuiPaper-elevation24': {
      boxShadow: 'none',
    },
    '& .MuiDialog-paper': {
      overflow: 'unset',
    },
    '&>div': {
      '&>div': {
        '&>div': {
          '&>ul': {
            listStyle: 'none',
            margin: '0 auto',
            padding: 0,
            '&>li': {
              margin: '2rem 0',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '27px',
              color: '#FFFFFF',
              textAlign: 'center',
            },
          },
          '&>span': {
            padding: '10px 32px',
            background: '#FFFFFF',
            borderRadius: '4px',
            color: '#000000',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '27px',
          },
        },
      },
    },
  },
})

const DialogMenuHeader = (props: {open: boolean; setOpen: () => void}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const handleClose = () => {
    props.setOpen()
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className={classes.container_dialog_menu}
      >
        <div>
          <ul>
            <li
              style={{
                fontWeight: location.pathname === '/' ? 700 : 400,
              }}
              onClick={() => navigate(ROUTE.HOME)}
            >
              회사소개
            </li>
            <li
              style={{
                fontWeight: location.pathname === '/portfolio' ? 700 : 400,
              }}
              onClick={() => navigate(ROUTE.PORTFOLIO)}
            >
              포트폴리오
            </li>
            <li
              style={{
                fontWeight:
                  location.pathname === '/estimate_calculation' ? 700 : 400,
              }}
              onClick={() => navigate(ROUTE.ESTIMATE_CALCULATION)}
            >
              견적계산
            </li>
            <li
              style={{
                fontWeight:
                  location.pathname === '/development_inquiry' ? 700 : 400,
              }}
              onClick={() => navigate(ROUTE.DEVELOPMENT_INQUIRY)}
            >
              개발문의
            </li>
          </ul>
          {/* <span>프로젝트 생성</span> */}
        </div>
      </Dialog>
    </div>
  )
}
export default DialogMenuHeader
