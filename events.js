const events=require('events')
const {EventEmitter}=events
const eventBus=new EventEmitter()

let obj={id:"node",name:"node.js"},time=0,arr=[]

while(time<2){
    eventBus.emit('sendData',obj)

    eventBus.on('sendData',(data)=>{
        arr.push(data)
        console.log(arr)
        time++
    })
}

