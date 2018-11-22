const gotoPage = async (url, show = false) => {
  // await navigate(url)
}

const parseUrl = (date, rawUrl) => {
  if (rawUrl === 'about') {
    return '/about/'
  }
  return `/${date}/${rawUrl}/`
}

export {
  gotoPage,
  parseUrl,
}
