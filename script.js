//your code here
let input=document.getElementById("evaluatedText")
let heading=document.getElementById("letterCount")
input.addEventListener("keyup",()=>{
	if(input.value==null){
		heading.innerText=input.value.length;
	}
})