export const isBrowser = () => {
  return (typeof window !== 'undefined')
}

export const isServer = () => {
  return (typeof window === 'undefined')
}

// Format a WP post date as we like it.
export const getDate = (dateString) => {
  const dateObj = new Date(Date.parse(dateString))
  let day = dateObj.getDate()
  let month = dateObj.getMonth()+1
  const year = dateObj.getFullYear()

  if (day.toString().length < 2) {
    day = `0${day}`
  }

  if (month.toString().length < 2) {
    month = `0${month}`
  }

  return `${day}.${month}.${year}`
}

// Encode (=decode) html text into html entity.
export const decodeHtmlEntity = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}

// Decides whether the passed post is new on not.
export const isPostNew = (post) => {
  // One day in ms
  var oneDay = 24*60*60*1000;

  // Current date
  const now = new Date()

  // Post publish date
  const postDate = new Date(Date.parse(post.date))

  // Calculate difference
  const differenceInDays = Math.round(Math.abs((now.getTime() - postDate.getTime())/(oneDay)))

  if (differenceInDays > 30) {
    return false
  }

  return true
}