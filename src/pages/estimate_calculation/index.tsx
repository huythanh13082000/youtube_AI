import {
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
} from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import {green} from '@material-ui/core/colors'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import eyeScan from '../../asset/images/eye-scan.png'

const useStyles = makeStyles({
  container_portfolio: {
    background: '#F3F4F6',
    paddingBottom: '2rem',
    '& .MuiTypography-body1': {
      fontFamily: 'Pretendard',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '27px',
      color: '#000000',
    },
    '& .MuiAccordionDetails-root': {
      '&>div': {
        display: 'flex',
        alignItems: 'center',
      },
    },
    '& .MuiButton-containedPrimary': {
      background: '#3B71FE',
      boxShadow: '0px 2px 8px rgba(59, 113, 254, 0.25)',
      borderRadius: '8px',
      width: '100%',
      padding: '12px 10px',
      fontFamily: 'Pretendard',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#FFFFFF',
    },
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#4B5563',
    },
    '&>div:nth-child(1)': {
      background: 'black',
      height: '120px',
    },

    '&>p': {
      textAlign: 'center',
    },

    '&>p:nth-child(2)': {
      fontWeight: 700,
      fontSize: '44px',
      lineHeight: '50px',
      color: '#000000',
    },
    '&>p:nth-child(3)': {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '20px',
      color: '#000000',
    },
    '&>div:nth-child(4)': {
      padding: '0 130px',
      display: 'flex',
      justifyContent: 'space-between',
      '&>div': {
        borderRadius: '4px',
        background: 'white',
      },
      '&>div:nth-child(1)': {
        width: '16%',
        maxHeight: '186px',
        '&>div': {
          padding: '8px 16px',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        },
        '&>div:nth-child(1)': {
          color: '#215DFC',
          background: '#C8E4FA',
        },
      },
      '&>div:nth-child(2)': {
        width: '52%',
        boxSizing: 'border-box',
        padding: '0 2rem',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#000000',
        },
      },
      '&>div:nth-child(3)': {
        width: '30%',
        padding: '1rem 2rem',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12)',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          color: '#111827',
          justifyContent: 'space-between',
        },
        '&>div': {
          '&>p': {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '27px',
            display: 'flex',
            color: '#111827',
            justifyContent: 'space-between',
            '&>span': {
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#4B5563',
            },
          },
        },
      },
    },
  },
  '@media (max-width: 740px)': {
    container_portfolio: {
      background: '#F3F4F6',
      paddingBottom: '2rem',
      '& .MuiTypography-body1': {
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#000000',
      },
      '& .MuiAccordionDetails-root': {
        '&>div': {
          display: 'flex',
          alignItems: 'center',
        },
      },
      '& .MuiButton-containedPrimary': {
        background: '#3B71FE',
        boxShadow: '0px 2px 8px rgba(59, 113, 254, 0.25)',
        borderRadius: '8px',
        width: '100%',
        padding: '12px 10px',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFFFFF',
      },
      '& .MuiFormControlLabel-label': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#4B5563',
      },
      '&>div:nth-child(1)': {
        background: 'black',
        height: '120px',
      },

      '&>p': {
        textAlign: 'center',
      },

      '&>p:nth-child(2)': {
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '42px',
        color: '#000000',
      },
      '&>p:nth-child(3)': {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        color: '#000000',
      },
      '&>div:nth-child(4)': {
        padding: '0px',
        display: 'inherit',
        // justifyContent: 'space-between',
        '&>div': {
          borderRadius: '4px',
          background: 'white',
        },
        '&>div:nth-child(1)': {
          // width: '400px',
          display: 'flex',
          // flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'center',
          '&>div': {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '47px',
            background: '#FFFFFF',
            border: '1px solid #215DFC',
            borderRadius: '10px',
            fontSize: '14px',
            marginRight: '1px',
          },
          '&>div:nth-child(1)': {
            color: '#215DFC',
            background: '#C8E4FA',
            width: '120px',
          },
          '&>div:nth-child(4)': {
            color: '#215DFC',
            background: '#C8E4FA',
            width: '120px',
          },
        },
        '&>div:nth-child(2)': {
          width: '100%',
          boxSizing: 'border-box',
          padding: '0.5rem 1rem',
          '&>p': {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '27px',
            color: '#000000',
          },
        },
        '&>div:nth-child(3)': {
          width: '100%',
          padding: '1rem 16px',
          boxSizing: 'border-box',
          boxShadow: 'none',
          '&>p': {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            color: '#111827',
            justifyContent: 'space-between',
          },
          '&>div': {
            '&>p': {
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '30px',
              display: 'flex',
              color: '#111827',
              justifyContent: 'space-between',
              '&>span': {
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#4B5563',
              },
            },
          },
        },
      },
    },
  },
})
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color='default' {...props} />)

const EstimateCalculation = () => {
  const classes = useStyles()

  return (
    <div className={classes.container_portfolio}>
      <div></div>
      <p>개발 비용 문의</p>
      <p>
        프로젝트 착수시 상세 개발 견적을 받을 수 있습니다 담당 개발자가 배정되어
        빠르게 개발이 진행됩니다
      </p>
      <div>
        <div>
          <div>UI/UX 디자인</div>
          <div>APP</div>
          <div>WEB</div>
          <div>관리자 페이지</div>
        </div>
        <div>
          <p>Page & Future</p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>구현할 UI 페이지 분량</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      // checked={state.checkedG}
                      // onChange={handleChange}
                      name='checkedG'
                    />
                  }
                  style={{fontSize: '14px'}}
                  label='10 페이지 이하'
                />
                <img
                  src={eyeScan}
                  alt=''
                  style={{width: '25px', height: '25px'}}
                />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Register</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      // checked={state.checkedG}
                      // onChange={handleChange}
                      name='checkedG'
                    />
                  }
                  style={{fontSize: '14px'}}
                  label='Basic (ID_PASSWORD)'
                />
                <img
                  src={eyeScan}
                  alt=''
                  style={{width: '25px', height: '25px'}}
                />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Profile page</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      // checked={state.checkedG}
                      // onChange={handleChange}
                      name='checkedG'
                    />
                  }
                  style={{fontSize: '14px'}}
                  label='Avatar'
                />
                <img
                  src={eyeScan}
                  alt=''
                  style={{width: '25px', height: '25px'}}
                />
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Home page</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Payment page</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Message</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Setting page</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </div>
        <div>
          <p>견적</p>
          <div>
            <p>UI/UX 디자인</p>
            <p>
              <span>20페이지</span> <span>100,000원</span>
            </p>
          </div>

          <div>
            <p>UI/UX 디자인</p>
            <p>
              <span>20페이지</span> <span>100,000원</span>
            </p>
          </div>

          <div>
            <p>UI/UX 디자인</p>
            <p>
              <span>20페이지</span> <span>100,000원</span>
            </p>
            <p>
              <span>20페이지</span> <span>100,000원</span>
            </p>
          </div>

          <div>
            <p>UI/UX 디자인</p>
            <p>
              <span>20페이지</span> <span>100,000원</span>
            </p>
          </div>

          <p style={{borderTop: '1px dashed #000000', padding: '1rem 0'}}>
            <span>총 금액</span> <span>450,000원</span>
          </p>
          <Button variant='contained' color='primary'>
            견적 신청하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EstimateCalculation
