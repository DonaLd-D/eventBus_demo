const {eventBus,Vue}=require('./eventBus.js') 
global.$eventBus=new Vue()

let time=0,obj={id:time,name:"掘金"},arr=[]

while(time<2){
    eventBus.$emit('sendSomething',obj)

    eventBus.$on('sendSomething',target=>{
        arr.push(target)
        console.log(arr)
        time++
    })
}

let _time=0, _obj={id:_time,name:'segmentfault'},_arr=[]
while(_time<2){
    $eventBus.$emit('sendSomestaff',_obj)

    $eventBus.$on('sendSomestaff',target=>{
        _arr.push(target)
        console.log(_arr)
        _time++
    })
}