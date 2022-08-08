const express = require('express')
const multer = require('multer')
const cors = require('cors')
const app = express()
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/')
  },
  filename(req, file, cb) {
    let ext = file.originalname.split('.')
    ext = ext[ext.length - 1]
    cb(null, `${Date.now()}.${ext}`)
  },
})

const upload = multer({ storage })
const corsOptions = {
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}

app.use([
  express.static('public'),
  express.json(),
  cors(corsOptions),
  upload.array('files'),
])

app.post('/upload_files', (req, res) => {
  if (req.files.length > 0) {
    res.json(req.files[0])
  }
})

app.get('/public', (req, res) => {
  res.send('asdasd')
})

app.listen(8080, () => {
  console.log(`Server started...`)
})
