const router = require('express').Router()
const db = require('../db')

router.get('/jif', (req, res) => {
  db.query('SELECT * FROM jif', (err, jif) => {
    if (err) { console.log(jif) }
    res.json(jif)
  })
})

router.post('/jif', (req, res) => {
  db.query('INSERT INTO jif SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.put('/jif/:id', (req, res) => {
  db.query('UPDATE jif SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.delete('/jif/:id', (req, res) => {
  db.query('DELETE FROM jif WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
