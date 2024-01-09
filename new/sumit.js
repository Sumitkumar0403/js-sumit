


//const arr=["sumit","anil","ekta","urmila"]


const obj={
    in:"India",
    us:"United states",
    fr:"France"
}


const arr=[
{name:"sumit", fname:"anil",price:100}, 
{name:"nitin", fname:"sanjay",price:1200}, 
{name:"mukku", fname:"manish",price:5100},
{name:"sumit",favrt:"kk",price:3200}]

let newarr= arr.reduce( (acc,item)=>acc+item.price,0 )

console.log(newarr);