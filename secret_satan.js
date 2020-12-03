const couples = [
  ['keith', 'laura'],
  ['erin', 'robbie'],
  ['chris', 'brandon'],
  ['sam', 'amy']
]
const oldMatches = [{"from":"keith","to":"erin"},{"from":"erin","to":"amy"},{"from":"kate","to":"chris"},{"from":"chris","to":"keith"},{"from":"brandon","to":"sam"},{"from":"laura","to":"kate"},{"from":"sam","to":"brandon"},{"from":"amy","to":"robbie"},{"from":"robbie","to":"laura"}]
let iteration = 0
const match = (names) => {
  iteration++
  console.log(iteration)
  const from = [...names]
  const to = [...names]
  let matches = []
  from.forEach((f) => {
    const index = Math.floor(Math.random() * to.length)
    const t = to.splice(index, 1)[0]
    matches.push({from: f, to: t})
  })
  if (!isValid(matches)) {
    matches = match(names)
  }
  iteration = 0
  return matches
}
const areACouple = ({from, to}) => {
  const couple = couples.find(couple => couple.includes(from))
  if (!couple) {
    return false
  }
  return couple.includes(to)
}
const isLastYear = ({from, to}) => {
  return Boolean(oldMatches.find(m => m.from === from && m.to === to))
}
const isValid = (arr) => {
  if (arr.some(match => match.from === match.to)) {
    return false
  }
  if (arr.some(match => areACouple(match))) {
    return false
  }
  if (arr.some(match => isLastYear(match))) {
    return false
  }
  return true
}
// const log = (matches) => {
//   matches.forEach((match) => {
//     console.log(`${match.from} will get a gift for ${match.to}`)
//   })
// }
// log(match(['keith', 'erin', 'kate', 'chris', 'brandon', 'laura', 'sam', 'amy', 'robbie']))
const matches = match(['keith', 'erin', 'kate', 'chris', 'brandon', 'laura', 'sam', 'amy', 'robbie'])
console.log(matches)
document.querySelector('.center').innerHTML = JSON.stringify(matches)