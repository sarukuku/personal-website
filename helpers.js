export const isBrowser = () => {
  return (typeof window !== 'undefined')
}

export const isServer = () => {
  return (typeof window === 'undefined')
}

export const getDate = (dateString) => {
  const dateObj = new Date(Date.parse(dateString))
  return `${dateObj.getDate()}.${dateObj.getMonth()+1}.${dateObj.getFullYear()}`
}

// encode(decode) html text into html entity
export const decodeHtmlEntity = (str) => {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}