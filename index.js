const express = require('express')
const QRCode = require('qrcode')

const app = express()

app.get('/qr', (req, res) => {
  const text = req.query.text || 'Hello, World!'
  QRCode.toDataURL(text, (err, url) => {
    if (err) throw err
    res.send(`<img src="${url}"/>`)
  })
})

app.listen(3000, () => {
  console.log('QR code generator app listening on port 3000!')
})