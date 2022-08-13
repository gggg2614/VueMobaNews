const express = require('express')
const cors = require('cors');

const app = express()

app.set('secret','fijodsa')

app.use(cors())
app.use(express.json())

app.use('/admin/',express.static(__dirname+'/admin'))
app.use('/uploads',express.static(__dirname+'/uploads'))
app.use('/',express.static(__dirname+'/web'))

require('./plugins/db')(app)
require('./routes/admin/index')(app)
require('./routes/web/index')(app)

app.listen(3000,(res,req)=>{
    console.log(3000);
})