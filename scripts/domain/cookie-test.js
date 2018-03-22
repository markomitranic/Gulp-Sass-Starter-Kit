agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');
console.log(readValue);

agCookie.erase('example-cookie');