// json data

const json ={
    "colors":['red','blue','green','yellow']
}

//  for loop
for(i=0;i<json.colors.length;i++){
    console.log("for-loop itertion  "+json.colors[i]);
}

//for-in
for(let i in json.colors){
    console.log("for-in itertion  "+  json.colors[i]);
}

//for-of
for(let value in json.colors){
    console.log("for-of itertion  "+json.colors[value]);
}
//for-each

let each = json.colors.forEach((e,i)=>{
    console.log("forEach "+e);
});
