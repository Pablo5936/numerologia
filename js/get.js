// get.js
function getParam(name) {
  const url = new URL(window.location.href)
  return url.searchParams.get(name)
}
