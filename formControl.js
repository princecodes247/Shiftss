// Globals
let formSection = document.querySelector("#form")
let resultSection = document.querySelector("#result")
resultSection.classList.add("hidden")

let formDetails = {
	roasterLength: 0,
	squads: [],
	leadingShift: [],
	leadingShiftLength: 0,
	days: 0,
	month: 0,
	year: 2021,
	shiftLength: 2,

}

// For Groups section
let groupsInput = document.querySelector("#groupsInput")
let commaSplit = (value) => {
  let res = value.split(',')
  return res
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
	
	commaSplit(groupsInput.value).forEach(group => {

		console.log("groupInput")
		formDetails.squads.push(group)
	})
	formDetails.shiftLength = shiftLengthInput.value
	 //formDetails.shiftLength = 2
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
