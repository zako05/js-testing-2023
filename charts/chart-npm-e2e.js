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
      data: [3019782, 5018968, 4063956, 4643583, 4330521, 4046968, 4406569, 4369905, 5509269, 4621147, 4006637, 5582126, 3694455, 4446646, 4550929],
      borderColor: 'rgb(4,212,158)',
    },
    {
      label: 'Playwright',
      data: [911011, 1218990, 1273917, 1343022, 1353163, 1315339, 1333929, 1606896, 2516676, 2746314, 2040755, 3231216, 1631148, 4004551, 4492069],
      borderColor: 'rgb(69, 186, 75)',
    },
    {
      label: 'Playwright/Test',
      data: [1423472, 1852892, 2013333, 2059785, 2079594, 2002342, 2262969, 2536994, 2516676, 2746314, 2040755, 3231216, 1537667, 3581650, 4014216],
      borderColor: 'rgb(226, 87, 76)',
    },
    {
      label: 'Cypress.io',
      data: [3683796, 4898661, 5089018, 5083542, 4831306, 4767115, 5085391, 5104196, 5080664, 5243418, 3599380, 5292427, 3025237, 5387694, 5641294],
      borderColor: 'rgb(240, 252, 248)',
    },
    {
      label: 'NightwatchJS',
      data: [163782, 183891, 219715, 274477, 180183, 173701, 183946, 166938, 169693, 172238, 132038, 173919, 84494, 163035, 163392],
      borderColor: 'rgb(145, 70, 24)',
    },
    {
      label: 'Testcafe',
      data: [201992, 263754, 247458, 229773, 213254, 231204, 244426, 231138, 230169, 242432, 178458, 261315, 125467, 274803, 242536],
      borderColor: 'rgb(37, 150, 190)',
    },
    {
      label: 'WebdriverIO',
      data: [1032206, 1389549, 1496473, 1452731, 1487050, 1226888, 1214306, 1214724, 1231657, 1368088, 948300, 1355118, 758072, 1288431, 1301752],
      borderColor: 'rgb(234, 89, 6)',
    },
    {
      label: 'QAWolf',
      data: [10091, 2955, 2205, 5707, 4854, 5216, 3264, 4042, 3296, 1466, 2250, 1123, 698, 1806, 2144],
      borderColor: 'rgb(62, 52, 235)',
    },
  ]
}
const chartId = document.getElementById('npm-stats-e2e')


new Chart(chartId, {
  type: 'line',
  data: getStarsDiffByMonths(data),
})
