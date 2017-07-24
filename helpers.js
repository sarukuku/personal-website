export const isBrowser = () => {
  return (typeof window !== 'undefined')
}

export const isServer = () => {
  return (typeof window === 'undefined')
}