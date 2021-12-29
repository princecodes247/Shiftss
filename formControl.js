// Globals
let formSection = document.querySelector("#form")
let resultSection = document.querySelector("#result")
resultSection.classList.add("hidden")

let formDetails = {
	roasterLength: 0,
	squads: ["a", "C","v"],
	leadingShift: [],
	leadingShiftLength: 0,
	days: 0,
	month: 0,
	year: 2021,
	shiftLength: 2,

}

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
	container.classList.add("groupInput")
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


// Shift Length 

let shiftLengthInput = document.querySelector("#shiftLength")

// END 



// Create Roaster and switches

let createRoasterButton = document.querySelector("button#createRoaster")
let backToFormButton = document.querySelector("button#backToForm")


createRoasterButton.addEventListener("click", () => {
	formSection.classList.add("hidden")
	resultSection.classList.remove("hidden")
	let groupsInput = document.querySelectorAll(".groupInput")
	groupsInput.forEach(groupInput => {

		console.log("groupInput")
		formDetails.squads.push(groupInput.querySelector("input").value)
	})
	formDetails.shiftLength = shiftLengthInput.value
	formDetails.shiftLength = 2
		formDetails.month = monthsList.value
	formDetails.days = daysInMonth(formDetails.year, formDetails.month)
	let test = Shifter(formDetails)
	let tryy = test.createShifts()
	test.makeTable(tryy)
})

backToFormButton.addEventListener("click", () => {
	resultSection.classList.add("hidden")
	formSection.classList.remove("hidden")
})
