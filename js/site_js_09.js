var p1 = { name:"Jamiu Adeleke",skill:"css,html,",
details:function () {return this.name+" "+this.skill}};  

var p2 = new Object();
p2.name = "Jamiu Adeleke";
p2.skill = "css,html";
//console.log(p1)

//console.log(p1.details())
//console.log(p1.name)
for(val in p1){
console.log(val)
}

for(val in p1){
console.log(p1[val])
}

txt="the quick brown fox"
//console.log(txt.length)
//console.log("*****",txt.indexOf("fox"))
nbrs=[120,134,56,78,99]
console.log(nbrs)
for(val in nbrs){
//console.log(nbrs[val])
}

//console.log(nbrs.length)

function dsum(a,b){
return a+b
}

//console.log(dsum(11,23))

let sum = (a, b) => a + b;
//console.log( sum(11,23) )

let i = 0; 
while (i < 3)
 { 
 
console.log( i );
 i++; 
}



for (let k= 0; k < 6; k++) 
{ 

  console.log("==>",k);
}







