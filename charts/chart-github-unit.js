import Chart from 'chart.js/auto'
import {
  labels,
  getStarsDiffByMonths
} from '../js/chart-helper.js'

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Vitest',
      data: [7240, 7700, 8070, 8380, 8700, 8970, 9280, 9530, 9900, 10130, 10350, 10560, 10870],
      borderColor: 'rgb(252, 199, 43)',
    },
    {
      label: 'Jest',
      data: [40330, 40660, 40930, 41170, 41370, 41560, 41760, 42020, 42260, 42500, 42680, 42820, 43000],
      borderColor: 'rgb(24, 223, 22)',
    },
    {
      label: 'Mocha',
      data: [21530, 21590, 21640, 21730, 21780, 21830, 21890, 21950, 22020, 22080, 22140, 22190, 22240],
      borderColor: 'rgb(141, 103, 72)',
    },
    {
      label: 'Ava',
      data: [19890, 19940, 19990, 20060, 20120, 20180, 20230, 20280, 20330, 20370, 20410, 20430, 20480],
      borderColor: 'rgb(108, 132, 172)',
    },
    {
      label: 'SinonJS',
      data: [9100, 9130, 9170, 9200, 9230, 9260, 9300, 9340, 9370, 9390, 9430, 9450, 9460],
      borderColor: 'rgb(75, 53, 42)',
    },
    {
      label: 'Jasmine',
      data: [15300, 15330, 15360, 15390, 15410, 15430, 15470, 15500, 15540, 15560, 15590, 15610, 15630],
      borderColor: 'rgb(138, 65, 130)',
    },
    {
      label: 'Chai',
      data: [7680, 7700, 7720, 7740, 7770, 7800, 7820, 7850, 7870, 7900, 7920, 7940, 7970],
      borderColor: 'rgb(164, 8, 2)',
    },
  ]
}
const chartId = document.getElementById('github-stars-history-unit')

new Chart(chartId, {
  type: 'line',
  data: getStarsDiffByMonths(data),
})
