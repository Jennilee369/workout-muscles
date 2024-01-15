// what this server needs?

const express = require('express')
const app = express()
const port = 5501

app.listen(port, () => {
    // which number is the server going to be listening
    console.log('server is running!')
})
// go get files and send back to the client side
// types of request: get,post,put,delete
app.get('/',(request, response) => {
    response.sendFile(__dirname +'/index.html')
})
app.get('/api/:workoutsName',(request,response) => {
    const workoutsName = request.params.workoutsName.toLowerCase()
    if(workouts[workoutsName]){
    response.json(workouts[workoutsName])
    }else{
       response.json(workouts['no more workouts'])
    }
})

// json-object
const workouts = {
    'abs': {
        ' level': 'begginner',
        'type': 'ab workout',
        'average calories': '1000',
        

    },
    'legs': {
        ' level': 'begginner',
        'type': 'ab workout',
        'average calories': '1000',
        

},
'back': {
    ' level': 'begginner',
    'type': 'ab workout',
    'average calories': '1000',
    
},
'no more workouts': {
    ' level': 'advanced',
    'type': 'ab workout',
    'average calories': '1000',
    
 }
}