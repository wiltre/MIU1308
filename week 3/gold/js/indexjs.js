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
			window.location="additem.html";
		}
	function launchAppB(){
			window.location="browseerror.html";
		}

	// calling buttn function	
	var startAppb = element("berries");
		startAppb.addEventListener("click", launchAppB);
	var startAppc = element("citrus");
		startAppc.addEventListener("click", launchAppB);
	var startAppr = element("refrigeration");
		startAppr.addEventListener("click", launchAppB);
	var startAppt = element("tropical");
		startAppt.addEventListener("click", launchAppB);
	var startAppf = element("favorites");
		startAppf.addEventListener("click", launchAppB);
		
	
});