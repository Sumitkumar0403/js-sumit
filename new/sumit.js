function hello(){
    console.log("inside the hello");
}

function demo(){
    console.log("inside the demo");
    hello();
}

console.log(("outside"));
demo();