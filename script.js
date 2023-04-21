//your code here
let input=document.getElementById("evaluatedText")
let heading=document.getElementById("letterCount")
input.addEventListener("input",()=>{
	let count=(input.value).length

		heading.textContent=`${count}`;
	
})