/************************************************************************************************
 * Author: Jason Glenn
 * Duolingo Anagram Programming Exercise
 * This is the code that compares two strings and determines if they are anagrams of one another.
 ************************************************************************************************/

/**
 * The clickProcessor function is called when the submit button on the form is clicked.  
 * It retrieves the two input strings from the form, calls isValidInput to validate the input strings, 
 * and passes them as arguments to the isAnagram function. 
 */
function clickProcessor()
{
	refreshOutput();
	
	var string1 = document.getElementById("firstString").value;
	var string2 = document.getElementById("secondString").value;
	
	//Trim the whitespace from both strings
	string1 = string1.replace(/\s/g,'');
	string2 = string2.replace(/\s/g,'');
		
	if(isValidInput(string1, string2))
	{
		if(isAnagram(string1, string2))
			document.getElementById("answer").innerHTML = "YES!  They are anagrams.";
		else
			document.getElementById("answer").innerHTML = "The two strings <u>ARE NOT</u> anagrams of each other.";
	}
}

/**
 * The refreshOutput function flushes the output spans 
 */
function refreshOutput()
{
	document.getElementById("answer").innerHTML = "";
	document.getElementById("string1Error").innerHTML = "";
	document.getElementById("string2Error").innerHTML = "";
}

/**
 * The isValidInput function validates the input strings.  Currently, it only validates to make sure the input strings aren't blank 
 */
function isValidInput(string1, string2)
{
		var string1IsValid = string2IsValid = true;
		
		if(string1.length == 0)
		{
			document.getElementById("string1Error").innerHTML = "*Please enter a value for String 1";
			string1IsValid = false;
		}
		if(string2.length == 0)
		{
			document.getElementById("string2Error").innerHTML = "*Please enter a value for String 2";
			string2IsValid = false;
		}
		return (string1IsValid && string2IsValid);
}

/**
 * The isAnagram function compares the two strings; returns true if the two strings are anagrams, false if they are not.
 */
function isAnagram(string1, string2)
{	
	//if the two input strings are not the same length, then they are not anagrams of one another; return false
	if(string1.length != string2.length)
	{
		return false;
	}
	//otherwise, continue to examine the strings
	else
	{		
		//ensure that all of the letters are the same case so that a comparison can be done.
		string1 = string1.toLowerCase();
		string2 = string2.toLowerCase();
		
		//split the strings into arrays of characters
		var string1Array = string1.split("");
		var string2Array = string2.split("");
		
		//sort the arrays
		string1Array.sort();
		string2Array.sort();		
		
		//convert arrays back to strings
		string1 = string1Array.toString();
		string2 = string2Array.toString();
		
		//compare the two strings
		var comparisonValue = string1.localeCompare(string2);
		
		//returns false if sorted strings are not the same and true if they are
		return (comparisonValue == 0);		
	}
}