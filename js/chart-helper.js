export const labels = [
  'BOM Jan 2023',
  'EOM Jan 2023',
  'EOM Feb 2023',
  'EOM Mar 2023',
  'EOM Apr 2023',
  'EOM May 2023',
  'EOM Jun 2023',
  'EOM Jul 2023',
  'EOM Aug 2023',
  'EOM Sep 2023',
  'EOM Oct 2023',
  'EOM Nov 2023',
  'EOM Dec 2023',
  'EOM Jan 2024',
  'EOM Feb 2024',
  'EOM Mar 2024',
]

export const getStarsDiffByMonths = (data) => {
  const datasets = data.datasets
  let diffLength, diffNum

  for (let dataset of datasets) {
    let stars = dataset.data
    let diff = [0]

    for (let i = 0; i < stars.length; i++) {
      diffLength = diff.length - 1

      if (stars[i+1] != undefined) {
        diffNum = stars[i+1] - stars[i] + diff[diffLength]
        if (diffNum < 0) diffNum = diffNum * -1
        diff.push(diffNum)
      } else {
        break
      }
    }
    dataset.data = diff < 0 ? diff * (-1) : diff
  }

  return data
}
