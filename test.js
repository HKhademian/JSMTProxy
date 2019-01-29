const http = require('http')
const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
})

server.listen(PORT, (err) => {
  if (err) return console.log('something bad happened', err)

  console.log(`server is listening on ${PORT}`)
})
console.log(`port is:${PORT}`)
