const http = require('http')
const student = [
    { name: 'Anil', mobile: '9876543210', city: 'Pune', email: 'anil@gmail.com' },
    { name: 'Mukesh', mobile: '9876543211', city: 'Pune', email: 'mukesh@gmail.com' },
    { name: 'Ramesh', mobile: '9876543212', city: 'Mumbai', email: 'ramesh@gmail.com' },
    { name: 'Suresh', mobile: '9876543213', city: 'Mumbai', email: 'suresh@gmail.com' }
]
const courses =[
    {courseid : '01', coursename :'PGCP-AC' },
    {courseid : '02', coursename :'PGCP-AI' },
    {courseid : '03', coursename :'PGCP-DMC' },
    {courseid : '04', coursename :'PGCP-DITISS' }
]
const server=http.createServer((request,response)=>
{
     console.log(`method - ${request.method} , path - ${request.url}`)
    if(request.method== 'GET' && request.url=='/student'){
        response.setHeader('content-type', 'application/json')
        response.end(JSON.stringify(student))
    }
    else if(request.method=='POST' && request.url=='/student'){
        response.end("Insertion Succesfully ")
    }
     else if(request.method=='PUT' && request.url=='/student'){
        response.end("Update Succesfully ")
    }
     else if(request.method=='DELETE' && request.url=='/student'){
        response.end("Delete Succesfully ")
    }
    else if(request.method== 'GET' && request.url=='/courses'){
        response.setHeader('content-type', 'application/json')
        response.end(JSON.stringify(courses))
    }
    else if(request.method=='POST' && request.url=='/courses'){
        response.end("Insertion Succesfully ")
    }
     else if(request.method=='PUT' && request.url=='/courses'){
        response.end("Update Succesfully ")
    }
     else if(request.method=='DELETE' && request.url=='/courses'){
        response.end("Delete Succesfully ")
    }
    else{
        response.end('Invalid Method')
    }    
})
server.listen(4000,'localhost',()=>{
    console.log('Server started at port 4000')
})