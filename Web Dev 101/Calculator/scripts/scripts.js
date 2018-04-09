//Calcualtor Web App

//Global Variables
var display = "";
var inputs = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","."];

//Math Functions
var sum = function(a,b) {                
	return a +b; 
};
var subtract = function(a,b) {
	return a-b; 
};
var multiply = function(a,b) {
	return a*b; 
}; 
var divide = function(a,b) {
	if(a === 0 || b === 0)
		alert("Please dont devide by 0")
	return a/b; 
};
//Operators
var operate = function(a,b, operator) {
	if (operator == "+") { 
		return sum(a,b);      
	}
	if (operator == "-") { 
		return subtract(a,b); 
	}
	if (operator == "*") { 
		return multiply(a,b); 
	}
	if (operator == "/") { 
		return divide(a,b);   
	}
	return "error invalid character";
};
//
var btnLogic = function(btn) { 
	 processCommand(btn.value);  
};
//Keyboard Support
document.addEventListener('keydown', function(event) { 
	processCommand(event.key);
});

var processString = function(string) {
	var startNumber=0;
	var array=[];
	var arraySplit = string.split("");
	var position   = array.length;   
	for ( var i=startNumber; i<arraySplit.length; i++ ) {	
		if ( arraySplit[i]!="+" && arraySplit[i]!="-" && arraySplit[i]!="*" && arraySplit[i]!="/" ){
			if(array[position]!==undefined) {
				array[position]+=arraySplit[i];
			}
			else { 
				array[position] = arraySplit[i]; 
			}
		}
		else if (arraySplit[i]=="+"||arraySplit[i]=="-"||arraySplit[i]=="*"||arraySplit[i]=="/") {
			if(i==0){
				array[position] = arraySplit[i];
			}
			else { 
				array.push(arraySplit[i]);
				position++; 
				position++;
			}
		} 
	}
	return array; 	
} 
//
var arrayOfStringsToNumbers = function (array) {  
	for (var i =0; i<array.length; i++) { 
		if ( array[i]!="+" && array[i]!="-" && array[i]!="*" && array[i]!="/" ) {	
			array[i]=parseFloat(array[i]); 
		}
	}
	return array ; 
}
//                                        
var computeTimesAndDivide=function(array) {
	var returnArray=[];
	for (i=0; i<array.length; i++) {
		if (typeof array[i]==="number") {
			var leftOperand = array[i];
			if (array[i+1]==="+"||array[i+1]==="-"||i==array.length-1) {
				returnArray.push(array[i]);
			} 
		}
		else if (array[i]==="*"||array[i]==="/") {
			var leftOperand = operate( leftOperand,array[i+1],array[i] );	
			if (array[i-2]==="*"||array[i-2]==="/") {
				returnArray[returnArray.length - 1] = leftOperand; 
			}
			else { 
				returnArray.push(leftOperand);
			}
			i++;
		}
		else { 
			returnArray.push(array[i]); 
		}
 	}
return returnArray;  
}

var computePlusAndMinus = function(array) {
	var leftOperand=array[0];
	for (i=1; i<array.length; i++) {
		leftOperand=operate( leftOperand, array[i+1], array[i] )
		i++;
	}
return leftOperand;
}

var execute = function(string) { 
  var lastChar=string.charAt(string.length - 1);

		if ( lastChar!="+"&&lastChar!="-"&&lastChar!="*"&&lastChar!="/"&&string!="") {
			var array = [];
			array = processString(string); 
			array = arrayOfStringsToNumbers(array);
			array = computeTimesAndDivide(array);
			var numberAnswer=computePlusAndMinus(array);
			numberAnswer = Math.round(numberAnswer*10000)/10000
			var stringAnswer = numberAnswer.toString();	
			return stringAnswer; 
		}
		else { 
		}
} 

 
var processCommand = function(cmd) {
	if (cmd == "=") { 
		document.getElementById("display").value = execute( display );
		display = "";
	}
	else if (cmd=="clear" ) { 
		clearField(); 
	}
	else if(cmd=="Backspace") {
		backSpace();
	}
	else if ( inputs.includes(cmd) ) { 
		if ( cmd=="0"&&display.charAt(display.length - 1) == "/" ) {
			alert("Please don't divide by 0");
		}
		else if (cmd==".") {
			if( decimalFind(display) == true ) {
				display = document.getElementById("display").value += cmd; 
			}  
		} 
		else { 
			display = document.getElementById("display").value += cmd;
		}
	}
}
//
var clearField = function() {
		display = document.getElementById("display").value = "";
		display = "";
}
//
var backSpace = function() {
	if(display!="") {
		display = display.slice(0,display.length-1);
		document.getElementById("display").value=display; 
	}
}
//
var decimalFind = function(string) {
	var i=string.length - 1; 
	while( i>=0 && typeof parseInt(string.charAt(i))=="number" && isNaN(parseInt(string.charAt(i)))==false ) {
		i--; 
	}
	if (i>=0) {
		if(string.charAt(i) === ".") {
			return false; 
		}
		else {
			return true;
		}
	}
	else { 
		return true; 
	}
}

