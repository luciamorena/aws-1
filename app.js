const os = require('os')
const app = require('express')()

const port = process.env.PORT || 5000

app.use('/site', require('express').static('site'));

app.get('/',(req,res)=>{
    res.status(200).json({
        msg:'API - 2.0.0',
        os:os.hostname(),
        valor:Math.random()
    })
})

app.listen(port,() => console.log(`SERVIDOR ONLINE - ${port}`))
