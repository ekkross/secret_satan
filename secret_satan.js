const couples = [
  ['keith', 'laura'],
  ['erin', 'robbie'],
  ['chris', 'brandon'],
  ['sam', 'amy']
]

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

const isValid = (arr) => {
  if (arr.some(match => match.from === match.to)) {
    return false
  }

  if (arr.some(match => areACouple(match))) {
    return false
  }

  return true
}

const log = (matches) => {
  matches.forEach((match) => {
    console.log(`${match.from} will get a gift for ${match.to}`)
  })

}

// log(match(['keith', 'erin', 'kate', 'chris', 'brandon', 'laura', 'sam', 'amy', 'robbie']))
const matches = match(['keith', 'erin', 'kate', 'chris', 'brandon', 'laura', 'sam', 'amy', 'robbie'])
document.querySelector('.center').innerHTML = JSON.stringify(matches)
