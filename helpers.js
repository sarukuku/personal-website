export const isBrowser = () => {
  return (typeof window !== 'undefined')
}

export const isServer = () => {
  return (typeof window === 'undefined')
}

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

// encode(decode) html text into html entity
export const decodeHtmlEntity = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}