export const diffTime = (time) => {
  const date1 = new Date(time).getTime()
  const date2 = new Date().getTime()
  const diff = Math.abs(date2 - date1)
  const diffTime = {
    s: Math.floor(diff / 1000),
    m: Math.floor(diff / (1000 * 60)),
    h: Math.floor(diff / (1000 * 60 * 60))
  }

  if (diffTime.h > 1) {
    return `${diffTime.h} hour ago`
  } else if (diffTime.m > 1) {
    return `${diffTime.m} minutes ago`
  } else {
    return `${diffTime.s} seconds ago`
  }
}
