import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from 'chart.js'
import {Doughnut, Line, Pie, Bar} from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
)
export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
      borderRadius: '20px',
    },
  },
}
const labelsBar = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
]

export const dataBar = {
  labels: labelsBar,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 4, 23, 16, 21, 18, 29],
      backgroundColor: '#FF6492',
    },
    {
      label: 'Dataset 2',
      data: [20, 8, 23, 16, 17, 18, 19],
      backgroundColor: '#6473FF',
    },
  ],
}
export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}

export const optionsDoughnut = {
  // responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
  },
}

const labelsLine = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]

export const dataLine = {
  labels: labelsLine,
  datasets: [
    {
      label: '조회수',
      data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#00BF71',
      backgroundColor: 'white',
    },
  ],
}
export const dataPie = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#E4A354', '#FF584A', '#40C6FF', '#54E45B', '#CFE454'],
      borderColor: ['#E4A354', '#FF584A', '#40C6FF', '#54E45B', '#CFE454'],
      borderWidth: 1,
    },
  ],
}
export const dataDoughnut = {
  labels: ['여성', '인류'],
  datasets: [
    {
      label: '',
      data: [12, 19],
      backgroundColor: ['#FF6492', '#6473FF'],
      borderColor: ['#FF6492', '#6473FF'],
      borderWidth: 1,
    },
  ],
}
const CustomChart = (props: {
  type: 'Line' | 'Area' | 'Pie' | 'Doughnut' | 'Bar'
  data?: {
    labels: string[]
    datasets: any[]
  }
}) => {
  const renderChart = () => {
    switch (props.type) {
      case 'Line':
        return <Line options={optionsLine} data={dataLine} />
      case 'Area':
        return <Line options={optionsLine} data={dataLine} />
      case 'Pie':
        return <Pie data={dataPie} options={optionsDoughnut} />
      case 'Doughnut':
        return <Doughnut data={dataDoughnut} options={optionsDoughnut} />
      case 'Bar':
        return <Bar options={optionsBar} data={dataBar} />
      default:
        break
    }
  }
  return <>{renderChart()}</>
}

export default CustomChart
