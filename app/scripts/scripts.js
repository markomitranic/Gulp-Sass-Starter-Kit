'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');
console.log(readValue);

agCookie.erase('example-cookie');
'use strict';

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');