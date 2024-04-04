import Chart from 'chart.js/auto'
import {
  labels,
  getStarsDiffByMonths
} from '../js/chart-helper.js'

const data = {
  labels,
  datasets: [
    {
      label: 'Puppeteer',
      data: [79890, 80290, 80770, 81240, 81800, 82400, 82810, 83210, 83650, 84020, 84410, 84800, 85170],
      borderColor: 'rgb(4,212,158)',
    },
    {
      label: 'Playwright',
      data: [45230, 46340, 47330, 48390, 49450, 51050, 51980, 52930, 53850, 54790, 55690, 56680, 57500],
      borderColor: 'rgb(69, 186, 75)',
    },
    {
      label: 'Cypress.io',
      data: [41260, 41570, 41920, 42230, 42530, 42830, 43140, 43740, 44310, 44560, 44810, 45010, 45330],
      borderColor: 'rgb(240, 252, 248)',
    },
    {
      label: 'NightwatchJS',
      data: [11110, 11160, 11190, 11220, 11250, 11280, 11310, 11340, 11370, 11390, 11410, 11460, 11480],
      borderColor: 'rgb(145, 70, 24)',
    },
    {
      label: 'Testcafe',
      data: [9340, 9400, 9440, 9470, 9510, 9540, 9570, 9580, 9610, 9630, 9640, 9670, 9690],
      borderColor: 'rgb(37, 150, 190)',
    },
    {
      label: 'WebdriverIO',
      data: [7700, 7760, 7810, 7880, 7920, 7960, 8010, 8060, 8150, 8210, 8270, 8330, 8400],
      borderColor: 'rgb(234, 89, 6)',
    },
    {
      label: 'QAWolf',
      data: [3150, 3160, 3180, 3190, 3200, 3210, 3220, 3230, 3240, 3250, 3250, 3260, 3270],
      borderColor: 'rgb(62, 52, 235)',
    },
  ]
}
const chartId = document.getElementById('github-stars-history-e2e')


new Chart(chartId, {
  type: 'line',
  data: getStarsDiffByMonths(data),
})
