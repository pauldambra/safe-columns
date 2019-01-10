
let activities = [
  'analysis',
  'design',
  'dev',
  'test',
  'security',
  'documentation',
  'user demo',
  'blocked'
]

let templatePointer = 0
let activityPointer = 0

const getNext = () => {
  if (activityPointer > activities.length - 1) {
    throw Error('you are now safe')
  }
  return activities[activityPointer++]
}

let currentActivity = getNext()

const templates = [
  x => `size for ${x}`,
  x => `high level design for ${x}`,
  x => `ready for ${x}`,
  x => `pre ${x}`,
  x => x,
  x => `${x} done`
]

module.exports = {
  generate: () => {
    console.log(templatePointer, 'tp')
    console.log(templates.length, 'tl')
    if (templatePointer > (templates.length - 1)) {
      templatePointer = 0
      currentActivity = getNext()
    }
    return templates[templatePointer++](currentActivity)
  }
}
