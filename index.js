const jsonServer=require('json-server')

const mpServer=jsonServer.create()

const middleweare=jsonServer.defaults()

const routes=jsonServer.router('db.json')

mpServer.use(middleweare)
mpServer.use(routes)

const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log('server running at:'+PORT)
})
