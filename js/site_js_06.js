/*defining a simple function
*/
val01=1234
val02="hello world "
val03=["tolu","deji","tunde"]


//addition
val1=120
val2=345
result=val1+val2

console.log(result)
data=val1+" + "+val2+" = "+ result
function show(data){
xval = document.getElementById('display')
xval.innerHTML=data
}


function show02(d1,d2,op,rs){
data=d1+""+op+""+d2+"="+rs
xval = document.getElementById('display')
xval.innerHTML=data
console.log("+++++tested")
}
d1=120
d2=345
rs=val1+val2
op="+"
//show02(d1,d2,op,rs)
//subtraction

d1=120
d2=345
rs=d1-d2
op="-"
//show02(d1,d2,op,rs)

//multiplication

d1=120
d2=345
rs=d1*d2
op="*"
//show02(d1,d2,op,rs)



//multiplication

d1=120
d2=345
rs=d1/d2
op="/"
//show02(d1,d2,op,rs)


//modulus

d1=520
d2=345
rs=d1%d2
op="%"
//show02(d1,d2,op,rs)

console.log("->",d2)
d2++
console.log("->",d2)
alert(d2)












