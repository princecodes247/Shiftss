// Globals
let formSection = document.querySelector("#form")
let resultSection = document.querySelector("#result")

// For Groups section
let groupsInput = document.querySelector("#groupsInput")
let addGroup = document.querySelector("button.addGroup")

let groupInput = () => {
	let input = document.createElement("input")
	input.value = ""
	input.placeholder = "Enter group name"
	let button = document.createElement("button")
	button.innerHTML = "X"
	button.onclick = e => deleteGroupInput(e)
	let container = document.createElement("span")
	container.appendChild(input)
	container.appendChild(button)
	groupsInput.appendChild(container)
}

addGroup.addEventListener("click", ()=>{
	groupInput()
	
})

let deleteGroupInput = e => {
	let targ = e.target.parentNode
	let parent = targ.parentNode
	parent.removeChild(targ)
}

// END

// Leading Shifts 

// END

// Month calculations

let dt = new Date()
console.log(dt)

let daysInMonth = (year, month) => {
	return new Date(year, month, 0).getDate()
}

let monthsList = document.querySelector("#monthsList")

monthsList.addEventListener("change", () => {
	month = monthsList.value
	console.log(daysInMonth(2021, month))
})

// Shift Length 

let shiftLengthInput = document.querySelector("#shiftLength")

shiftLengthInput.addEventListener("input", () => {
	shiftLength = shiftLengthInput.value
})
// END 



// Create Roaster and switches

let createRoasterButton = document.querySelector("button#createRoaster")
let backToFormButton = document.querySelector("button#backToForm")


createRoasterButton.addEventListener("click", () => {
	formSection.classList.add("hidden")
	resultSection.classList.remove("hidden")
})

backToFormButton.addEventListener("click", () => {
	resultSection.classList.add("hidden")
	formSection.classList.remove("hidden")
})
