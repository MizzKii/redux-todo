export default (req, res) => {
  res.send (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Redux Todolist</title>
    </head>
    <body>
      <script src="./bundle.js"></script>
    </body>
  </html>
  `)
}
