/**
 * @author Wil
 * Title: additem.html Style
 * By: Wiltre Santiago 
 * For: MIU Project 4
 * This is the js for index.html
 */

// alert("Hello World Index. ");

window.addEventListener("DOMContentLoaded", function(){	
	//getElementById Function
	function element(a){
		var getElement = document.getElementById(a);
		return getElement;		
	}
	
	//button function 
	function launchApp(){
			window.location="index.html";
		}
	// calling buttn function	
	var startAppb = element("errorButton");
		startAppb.addEventListener("click", launchApp);
			
	
});