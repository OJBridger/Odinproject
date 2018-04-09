//Add
function sumAdd(a, b) {
	return a + b
};
//Subtract
function sumSubtract(a, b) {
	return a - b
};
//Multiply
function sumMultiply(a, b) {
	return a * b
};
//Divide
function sumDivide(a, b) {
	return a / b
};
//Operator
function operate(func, num1, num2) {
	return func(num1, num2)
}
//Variables
let displayVariableA = 0;
let displayVariableB = 0;
let selectedOperator = '';
//Logic for populating the display box
function showResult() {
	const displayBox = document.querySelector("#displayVarible");
	displayBox.textContent = displayVariable
};
//
function computedResult() {
	selectedOperator(displayVariableA, displayVariableB)
};
//Button Logic
document.getElementById('numBut1').onclick =      function() {

};
document.getElementById('numBut2').onclick =      function() {

};
document.getElementById('numBut3').onclick =      function() {

};
document.getElementById('numBut4').onclick =      function() {

};
document.getElementById('numBut5').onclick =      function() {

};
document.getElementById('numBut6').onclick =      function() {

};
document.getElementById('numBut7').onclick =      function() {

};
document.getElementById('numBut8').onclick =      function() {

};
document.getElementById('numBut9').onclick =      function() {

};
document.getElementById('numBut0').onclick =      function() {

}; 
document.getElementById('numButPlus').onclick =   function() {
	selectedOperator = sumAdd
	console.log(selectedOperator)
};
document.getElementById('numButMinus').onclick =  function() {
	selectedOperator = sumSubtract
	console.log(selectedOperator)
};
document.getElementById('numButDivide').onclick = function() {
	selectedOperator = sumDivide
	console.log(selectedOperator)
};
document.getElementById('numButTimes').onclick =  function() {
	selectedOperator = sumMultiply
	console.log(selectedOperator)
};
document.getElementById('numButClear').onclick =  function() {
	displayVariableA = 0;
	displayVariableB = 0;
	selectedOperator = '';
};
document.getElementById('numButEquals').onclick = function() {
	showResult(computedResult())
};



