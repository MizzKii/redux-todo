export default (req, res) => {
  res.send (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Redux Todolist</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body style="background-color: #EEE">
      <script src="/bundle.js"></script>
    </body>
  </html>
  `)
}
