import { readFile } from 'fs';
// 1. Write a function to determine whether a string is a palindrome.
//  check if the string is palindrome
function question1Palindrome(string) {
    // length of a string
    const len = string.length;

    // for loop
    for (let i = 0; i < len / 2; i++) {

        // if 1st and last string are the same...
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// get input and check palindrome 
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);


// 3. Write a function to read all the contents of a file asynchronously
function question3 () {
readFile('/etc/passwd', (err, data) => {
	if (err) throw err;
	console.log(data);
});
}

// 2. Write a function to list all files in a directory.
function question2() {
	const fs = require('fs')
	fs.readFile('C:\Users\cutep\JavaNotepad', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);
	});
}

// 4. Write a function that makes an HTTP request asynchronously and logs the status and response.

