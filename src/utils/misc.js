export const get = (f, fallbakValue) => {
  try {
    return f()
  } catch (e) {
    return fallbakValue || ''
  }
}
