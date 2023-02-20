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
              style={
                location.pathname === '/'
                  ? {
                      fontWeight: 700,
                      borderBottom: '2px solid white',
                    }
                  : {fontWeight: 400}
              }
              onClick={() => navigate(ROUTE.HOME)}
            >
              Home
            </li>
            <li
              style={
                location.pathname === '/intro'
                  ? {
                      fontWeight: 700,
                      borderBottom: '2px solid white',
                    }
                  : {fontWeight: 400}
              }
              onClick={() => navigate(ROUTE.INTRO)}
            >
              회사소개
            </li>
            <li
              style={
                location.pathname === '/portfolio'
                  ? {
                      fontWeight: 700,
                      borderBottom: '2px solid white',
                    }
                  : {fontWeight: 400}
              }
              onClick={() => navigate(ROUTE.PORTFOLIO)}
            >
              포트폴리오
            </li>
            <li
              style={
                location.pathname === '/estimate_calculation'
                  ? {
                      fontWeight: 700,
                      borderBottom: '2px solid white',
                    }
                  : {fontWeight: 400}
              }
              onClick={() => navigate(ROUTE.ESTIMATE_CALCULATION)}
            >
              견적계산
            </li>
            <li
              style={
                location.pathname === '/development_inquiry'
                  ? {
                      fontWeight: 700,
                      borderBottom: '2px solid white',
                    }
                  : {fontWeight: 400}
              }
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
