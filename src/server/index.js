import express from 'express'
import ssr from './ssr'

const app = express ()

app.use ('/', ssr)

app.listen (3000, () => console.log (`Server start on port 3000`))
