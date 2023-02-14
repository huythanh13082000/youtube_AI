import {makeStyles} from '@material-ui/core'
import {useState} from 'react'
import Rating from '@material-ui/lab/Rating'
import comma from '../../asset/images/,.png'
import left from '../../asset/images/left.png'
import right from '../../asset/images/right.png'

const LIST_DATA_SLIDE = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    star: 4,
    comment:
      "We are very satisfied when using greenapp's service, excellent quality, dedicated support.",
    name: 'Thomas Edison',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    star: 5,
    comment:
      "We are very satisfied when using greenapp's service, excellent quality, dedicated support.1",
    name: 'Thomas Edison1',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    star: 3,
    comment:
      "We are very satisfied when using greenapp's service, excellent quality, dedicated support.2",
    name: 'Thomas Edison2',
  },
]

const useStyles = makeStyles({
  slide_container: {
    width: '50%',
    padding: '32px 24px 44px 100px',
    gap: '10px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    position: 'relative',
    '&>p:nth-child(2)': {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '24px',
      display: 'flex',
      alignItems: 'center',
      color: '#2C2C2C',
    },
    '&>p:nth-child(3)': {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '24px',
      display: 'flex',
      alignItems: 'center',
      color: '#000000',
      '&>span': {
        '&>img': {
          width: '32px',
          height: '32px',
        },
      },
    },
    '&>img:nth-child(4)': {
      width: '100px',
      height: '100px',
      position: 'absolute',
      borderRadius: '50%',
      objectFit: 'cover',
      top: 'calc(50% - 50px)',
      left: '-51px',
    },
    '&>div:nth-child(5)': {
      position: 'absolute',
      bottom: '-34px',
      left: 'calc(50% - 70px)',
      '&>img': {
        width: '50px',
        height: '50px',
        margin: '0 10px',
      },
    },
  },
  '@media (max-width: 740px)': {
    slide_container: {
      width: '70%',
      padding: '16px 0 0 50px',
      gap: '10px',
      background: '#FFFFFF',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      position: 'relative',
      '&>p:nth-child(2)': {
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        color: '#2C2C2C',
      },
      '&>p:nth-child(3)': {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        '&>span': {
          '&>img': {
            width: '32px',
            height: '32px',
          },
        },
      },
      '&>img:nth-child(4)': {
        width: '64px',
        height: '64px',
        position: 'absolute',
        borderRadius: '50%',
        objectFit: 'cover',
        top: 'calc(50% - 32px)',
        left: '-32px',
      },
      '&>div:nth-child(5)': {
        position: 'absolute',
        bottom: '-34px',
        left: 'calc(50% - 70px)',
        '&>img': {
          width: '50px',
          height: '50px',
          margin: '0 10px',
        },
      },
    },
  },
})

export const Slideshow = () => {
  const classes = useStyles()
  const [index, setIndex] = useState<number>(0)
  return (
    <div className={classes.slide_container}>
      <Rating
        name='half-rating-read'
        value={LIST_DATA_SLIDE[index].star}
        precision={0.5}
        readOnly
      />
      <p>{LIST_DATA_SLIDE[index].comment}</p>
      <p>
        {LIST_DATA_SLIDE[index].name}{' '}
        <span>
          <img src={comma} alt='' />
        </span>
      </p>
      <img src={LIST_DATA_SLIDE[index].url} alt={LIST_DATA_SLIDE[index].name} />
      <div>
        <img
          src={left}
          alt=''
          onClick={() => {
            if (index === 0) {
              setIndex(LIST_DATA_SLIDE.length - 1)
            } else setIndex(index - 1)
          }}
        />
        <img
          src={right}
          alt=''
          onClick={() => {
            if (index === LIST_DATA_SLIDE.length - 1) setIndex(0)
            else setIndex(index + 1)
          }}
        />
      </div>
    </div>
  )
}
