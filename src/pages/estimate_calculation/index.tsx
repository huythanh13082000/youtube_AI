import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Theme,
  createStyles,
} from '@material-ui/core'
import React from 'react'
import estimateCalculationBackground from '../../asset/images/estimate_calculation_background.png'
import CardSuccessCase from '../../components/card_success_case'
import {LIST_DATA_SERVICE} from '../../constants'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import sumIcon from '../../asset/images/+.png'
import minimizeIcon from '../../asset/images/-.png'

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
          display: 'flex',
          justifyContent: 'space-between',
          '&>span': {
            border: '1px solid  #9CA3AF',
            padding: '6px',
            fontWeight: 500,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            '&>span': {
              // border: '1px solid  #9CA3AF',
              // padding: '6px',
              margin: '0 6px',
            },
          },
        },
        // '& .MuiAccordionSummary-root': {
        //   borderBottom: '1px solid #9CA3AF',
        // },
        // '& .Mui-expanded:before': {
        //   opacity: 0,
        // },
      },
      '&>div:nth-child(3)': {
        boxSizing: 'border-box',
        width: '28%',
        padding: '30px 4%',
        background: '#FFFFFF',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          color: '#000000',
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
                      style={{width: '60px', height: '60px'}}
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
            Flash creen
            <span>
              <img
                style={{width: '14px', border: '1px solid #9CA3AF'}}
                src={minimizeIcon}
                alt=''
              />
              <span>0</span>
              <img
                style={{width: '14px', border: '1px solid #9CA3AF'}}
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
        </div>
      </div>
    </div>
  )
}

export default EstimateCalculation
