import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import sumIcon from '../../asset/images/+.png'
import minimizeIcon from '../../asset/images/-.png'
import estimateCalculationBackground from '../../asset/images/estimate_calculation_background.png'
import {LIST_DATA_SERVICE} from '../../constants'
import CloseIcon from '@material-ui/icons/Close'

import reviewLogin from '../../asset/images/review-login.png'
import reviewProfile from '../../asset/images/review-profile.png'
import reviewAction from '../../asset/images/review-action.png'

const useStyles = makeStyles({
  container_portfolio: {
    '&>div:nth-child(1)': {
      background: `url(${estimateCalculationBackground})`,
      backgroundSize: 'cover',
      position: 'relative',
      height: '800px',
      '&>div:nth-child(1)': {
        position: 'absolute',
        top: '40%',
        width: '100%',
        '&>p': {
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '44px',
          lineHeight: '66px',
          color: '#FFFFFF',
          margin: '5px 0',
        },
        '&>p:nth-child(2)': {
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
    },
    '&>div:nth-child(2)': {
      padding: '0 140px',
      boxShadow: '0px 2px 16px rgba(78, 78, 78, 0.16)',
      '& .MuiPaper-elevation1': {
        boxShadow: 'none',
      },
      '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
        padding: '12px 0',
        '& .MuiTab-wrapper': {
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '36px',
          '&>div': {
            '&>img': {
              width: '60px',
              height: '60px',
            },
          },
        },
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
        WebkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
    },
    '&>div:nth-child(3)': {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#F9FAFB',
      padding: '60px 130px 80px 130px',
      '&>div:nth-child(1)': {
        boxSizing: 'border-box',
        width: '20%',
        padding: '30px 4%',
        background: '#FFFFFF',
        borderRadius: '4px',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#000000',
        },
      },
      '&>div:nth-child(2)': {
        boxSizing: 'border-box',
        width: '50%',
        padding: '30px 4%',
        background: '#FFFFFF',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#000000',
        },
        '& .MuiPaper-elevation1': {
          boxShadow: 'none',
        },
        '&>div': {
          '&>p': {
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '27px',
            color: '#000000',
          },
          '&>span': {
            border: '1px solid  #9CA3AF',
            fontWeight: 500,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
          },
        },
        '&>div:nth-child(2)': {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '2rem 0',
          '&>span': {
            border: '1px solid  #9CA3AF',
            fontWeight: 500,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            '&>span': {
              margin: '0 6px',
            },
          },
        },
      },
      '&>div:nth-child(3)': {
        boxSizing: 'border-box',
        width: '28%',
        padding: '30px 4%',
        background: '#FFFFFF',
        '&>p:nth-child(1)': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#000000',
        },
        '&>p': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&>span:nth-child(2)': {
            display: 'flex',
            alignItems: 'center',
            color: '#EF4444',
            background: '#FEF2F2',
            borderRadius: '100px',
            padding: '6px 16px',
          },
        },
        '&>img': {
          width: '100%',
        },
      },
    },
  },
  '@media (max-width: 740px)': {
    container_portfolio: {
      '&>div:nth-child(1)': {
        background: `url(${estimateCalculationBackground})`,
        backgroundSize: 'cover',
        position: 'relative',
        height: '550px',
        '&>div:nth-child(1)': {
          position: 'absolute',
          top: '40%',
          width: '100%',
          '&>p': {
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '42px',
            color: '#FFFFFF',
            margin: '5px 0',
          },
          '&>p:nth-child(2)': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
          },
        },
      },
      '&>div:nth-child(2)': {
        padding: '1rem 0',
        boxShadow: '0px 2px 16px rgba(78, 78, 78, 0.16)',
        '& .MuiPaper-elevation1': {
          boxShadow: 'none',
        },
        '& .MuiTabs-flexContainer': {
          justifyContent: 'center',
          padding: '12px 0',
          '& .MuiTab-wrapper': {
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '36px',
            '&>div': {
              '&>img': {
                width: '40px',
                height: '40px',
              },
              '&>p': {
                fontSize: '16px',
                lineHeight: '24px',
                color: '#9CA3AF',
              },
            },
          },
        },
        '& .MuiTab-textColorPrimary.Mui-selected': {
          background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
          WebkitBackgroundClip: 'text',
          webkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        },
      },
      '&>div:nth-child(3)': {
        display: 'inherit',
        justifyContent: 'space-between',
        background: '#F9FAFB',
        padding: '1rem',
        '&>div:nth-child(1)': {
          boxSizing: 'border-box',
          width: '100%',
          padding: '30px 4%',
          background: '#FFFFFF',
          borderRadius: '4px',
          '&>p': {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            color: '#000000',
          },
        },
        '&>div:nth-child(2)': {
          boxSizing: 'border-box',
          width: '100%',
          padding: '1rem',
          background: '#FFFFFF',
          '&>p': {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            color: '#000000',
          },
          '& .MuiPaper-elevation1': {
            boxShadow: 'none',
          },
          '&>div': {
            '&>p': {
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#000000',
            },
            '&>span': {
              border: '1px solid  #9CA3AF',
              fontWeight: 500,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
            },
          },
          '&>div:nth-child(2)': {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '2rem 0',
            '&>span': {
              border: '1px solid  #9CA3AF',
              fontWeight: 500,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              '&>span': {
                margin: '0 6px',
              },
            },
          },
        },
        '&>div:nth-child(3)': {
          boxSizing: 'border-box',
          width: '100%',
          padding: '30px 4%',
          background: '#FFFFFF',
          '&>p:nth-child(1)': {
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '30px',
            color: '#000000',
          },
          '&>p': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&>span:nth-child(2)': {
              display: 'flex',
              alignItems: 'center',
              color: '#EF4444',
              background: '#FEF2F2',
              borderRadius: '100px',
              padding: '6px 16px',
            },
          },
          '&>img': {
            width: '100%',
          },
        },
      },
    },
  },
})

const EstimateCalculation = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(2)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.container_portfolio}>
      <div>
        <div>
          <p>개발 비용 문의</p>
          <p>
            실시간 프로토타이핑으로 응대를 해드리고 프로젝트 착수시 상세 개발
            견적을 받을 수 있습니다 담당 개발자가 배정되어 빠르게 개발이
            진행됩니다
          </p>
        </div>
      </div>
      <div>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            aria-label='disabled tabs example'
          >
            {LIST_DATA_SERVICE.map((item) => (
              <Tab
                label={
                  <div>
                    <img
                      src={item.url}
                      alt=''
                      // style={{width: '60px', height: '60px'}}
                    />
                    <p style={{margin: '0'}}>{item.name}</p>
                  </div>
                }
              />
            ))}
          </Tabs>
        </Paper>
      </div>
      <div>
        <div>
          <p>Dev language</p>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={gilad}
                    // onChange={handleChange}
                    name='PHP'
                  />
                }
                label='PHP'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={jason}
                    // onChange={handleChange}
                    name='Python'
                  />
                }
                label='Python'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name='Java'
                  />
                }
                label='Java'
              />
            </FormGroup>
          </FormControl>

          <p>Flatform</p>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={gilad}
                    // onChange={handleChange}
                    name='Android'
                  />
                }
                label='Android'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={jason}
                    // onChange={handleChange}
                    name='IOS'
                  />
                }
                label='IOS'
              />
            </FormGroup>
          </FormControl>

          <p>Reponsive</p>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={gilad}
                    // onChange={handleChange}
                    name='Desktop'
                  />
                }
                label='Desktop'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={jason}
                    // onChange={handleChange}
                    name='Tablet'
                  />
                }
                label='Tablet'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={jason}
                    // onChange={handleChange}
                    name='Mobile'
                  />
                }
                label='Mobile'
              />
            </FormGroup>
          </FormControl>
        </div>
        <div>
          <p>Page & Future</p>
          <div>
            <p style={{margin: 0}}>Flash creen</p>
            <span>
              <img
                style={{width: '14px', padding: '0 6px'}}
                src={minimizeIcon}
                alt=''
              />
              <div style={{height: '100%', border: '1px solid #9CA3AF'}}></div>
              <span>0</span>
              <div style={{height: '100%', border: '1px solid #9CA3AF'}}></div>
              <img
                style={{width: '14px', padding: '0 6px'}}
                src={sumIcon}
                alt=''
              />
            </span>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Sign in
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl component='fieldset'>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name='Basic (ID_PASSWORD)'
                        />
                      }
                      label='Basic (ID_PASSWORD)'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Socical'
                        />
                      }
                      label='Socical'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Phone Number'
                        />
                      }
                      label='Phone Number'
                    />
                  </FormGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Register
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl component='fieldset'>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name='Basic (ID_PASSWORD)'
                        />
                      }
                      label='Basic (ID_PASSWORD)'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Socical'
                        />
                      }
                      label='Socical'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Phone Number'
                        />
                      }
                      label='Phone Number'
                    />
                  </FormGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Profile page
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormControl component='fieldset'>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name='Avatar'
                        />
                      }
                      label='Avatar'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Email'
                        />
                      }
                      label='Email'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name='Phone Number'
                        />
                      }
                      label='Phone Number'
                    />
                  </FormGroup>
                </FormControl>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Home page
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Payment page
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Message
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography
                style={{
                  fontFamily: 'Pretendard',
                  color: '#000000',
                  fontSize: '18px',
                }}
              >
                Setting page
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography></Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <p>Review</p>
          <p>
            <span>1.로그인 및 프로필 화면</span>
            <span>
              <CloseIcon /> 제거됨
            </span>
          </p>
          <img src={reviewLogin} alt='' />
          <p>
            <span>1.로그인 및 프로필 화면</span>
            <span>
              <CloseIcon /> 제거됨
            </span>
          </p>
          <img src={reviewProfile} alt='' />
          <p>
            <span>1.로그인 및 프로필 화면</span>
            <span>
              <CloseIcon /> 제거됨
            </span>
          </p>
          <img src={reviewAction} alt='' />
        </div>
      </div>
    </div>
  )
}

export default EstimateCalculation
