import {
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel
} from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { green } from '@material-ui/core/colors'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OPTION, TAG } from '../../apis/urlConfig'
import eyeScan from '../../asset/images/eye-scan.png'
import { BASE_URL, LIST_TYPE } from '../../constants'
import { ROUTE } from '../../router/routes'
import { numberWithCommas, sum } from '../../utils'
import DialogImg from './dialog_img'

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
        '&>div:hover': {
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
        // color: '#FFFFFF',
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
          '&>div:hover': {
            color: '#215DFC',
            background: '#C8E4FA',
            // width: '120px',
          },
          // '&>div:nth-child(4)': {
          //   color: '#215DFC',
          //   background: '#C8E4FA',
          //   width: '120px',
          // },
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
  const navigate = useNavigate()
  const [type, setType] = useState<'UX_UI' | 'APP' | 'WEB' | 'ADMIN_PAGE'>(
    'UX_UI'
  )
  const [tag, setTag] = useState<string>('UI_PAGE')
  const [listTag, setListTag] = useState<
    {name: string; type?: string; id?: number}[]
  >([])
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState<string>('')
  const [listOption, setListOption] = useState<
    {
      nameOption: string
      image: string | File | FormData
      type?: string
      tag?: string
      price: number
      schedule: number
      id?: number
    }[]
  >([])
  const [options, setOptions] = useState<
    {
      type?: string
      nameOption: string
      price: number
      // tag?: string
    }[]
  >([])
  useEffect(() => {
    const getTag = async () => {
      const data: {
        data: {
          code: number
          data: {listTags: {name: string; type?: string; id?: number}[]}
        }
      } = await axios.get(`${BASE_URL}${TAG}`, {
        params: {type: type},
      })
      if (data && data.data.code === 0)
        data && setListTag(data.data.data.listTags)
    }
    getTag()
  }, [type])

  useEffect(() => {
    const getOption = async () => {
      const data: {
        data: {
          code: number
          data: {
            listOption: {
              nameOption: string
              image: string | File | FormData
              type?: string
              tag?: string
              price: number
              schedule: number
              id?: number
            }[]
          }
        }
      } = await axios.get(`${BASE_URL}${OPTION}`, {
        params: {type: type},
      })
      if (data && data.data.code === 0)
        data && setListOption(data.data.data.listOption)
    }
    getOption()
  }, [type])
  const handleOption = (item: {
    type?: string
    nameOption: string
    price: number
    tag?: string
  }) => {
    if (
      options.filter((option) => option.nameOption === item.nameOption).length >
      0
    ) {
      setOptions([
        ...options.filter((option) => option.nameOption !== item.nameOption),
      ])
    } else {
      setOptions([
        ...options,
        {
          nameOption: item.nameOption,
          price: item.price,
          type: item.type,
          // tag: item.tag,
        },
      ])
    }
  }
  const handleClick = () => {
    localStorage.setItem('options', JSON.stringify(options))
    navigate(ROUTE.DEVELOPMENT_INQUIRY)
  }

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
          <div
            style={
              type === 'UX_UI' ? {background: '#C8E4FA', color: '#215DFC'} : {}
            }
            onClick={() => setType('UX_UI')}
          >
            UI/UX 디자인
          </div>
          <div
            style={
              type === 'APP' ? {background: '#C8E4FA', color: '#215DFC'} : {}
            }
            onClick={() => setType('APP')}
          >
            APP
          </div>
          <div
            style={
              type === 'WEB' ? {background: '#C8E4FA', color: '#215DFC'} : {}
            }
            onClick={() => setType('WEB')}
          >
            WEB
          </div>
          <div
            style={
              type === 'ADMIN_PAGE'
                ? {background: '#C8E4FA', color: '#215DFC'}
                : {}
            }
            onClick={() => setType('ADMIN_PAGE')}
          >
            관리자 페이지
          </div>
        </div>
        <div>
          <p>Page & Future</p>
          {listTag.map((item) => (
            <Accordion key={item.id} onClick={() => setTag(item.name)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{display: 'initial'}}>
                {listOption.map(
                  (itemOption) =>
                    itemOption.tag === item.name && (
                      <div key={itemOption.id} style={{paddingLeft: '1rem'}}>
                        <FormControlLabel
                          control={
                            <GreenCheckbox
                              checked={
                                options.filter(
                                  (option) =>
                                    option.nameOption === itemOption.nameOption
                                ).length > 0
                              }
                              // onChange={handleChange}
                              name='checkedG'
                              onClick={() => handleOption(itemOption)}
                            />
                          }
                          style={{fontSize: '14px', width: '35%'}}
                          label={itemOption.nameOption}
                        />
                        <img
                          src={eyeScan}
                          alt=''
                          style={{width: '25px', height: '25px'}}
                          onClick={() => {
                            itemOption.image &&
                              setImg(itemOption.image as string)
                            setOpen(true)
                          }}
                        />
                      </div>
                    )
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div>
          <p>견적</p>
          {LIST_TYPE.map((item) => (
            <div key={item}>
              <p>{item}</p>
              {options.map(
                (option) =>
                  option.type === item && (
                    <p key={option.nameOption}>
                      <span>{option.nameOption}</span>{' '}
                      <span>{numberWithCommas(option.price)}원</span>
                    </p>
                  )
              )}
            </div>
          ))}

          <p style={{borderTop: '1px dashed #000000', padding: '1rem 0'}}>
            <span>총 금액</span> <span>{numberWithCommas(sum(options))}원</span>
          </p>
          <Button
            variant='contained'
            color='primary'
            onClick={handleClick}
            disabled={options.length === 0}
          >
            견적 신청하기
          </Button>
        </div>
      </div>
      <DialogImg open={open} img={img} setOpen={() => setOpen(false)} />
    </div>
  )
}

export default EstimateCalculation
