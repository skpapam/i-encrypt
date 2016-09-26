# i-encrypt

Encryption / Encryption made simple

## Installation

```bash
	npm install i-encrypt -save
```

## API 

**Require**
```js
	var ie = require('i-encrypt')(options);
```

**Options can be**
```js
	{
		//The encryption key by default is set to a random generated key
		key:"A secure secret string", 

		//Debug mode switcher by default is false
		debug:true
	}
```

* **ie.encrypt(data)** Will encrypt the given data. The data bust be any object or string or number. 
Will return the encrypted text or null on fail. 

* **ie.decrypt(text)** Will decrypt the given text. Will return an object, a string, a number or null on fail.

* **ie.sign(data, format)** Will generate an hmac signature for the given data. 
The data must be any object or string or number.
The format is the format of the generated signature by default is *'base64'*.
Will return the signature or null on fail.

* **ie.validate(data, signature, format)** Validate data's signature. Will return boolean. 

## LICENSE 
MIT

Copyright (c) 2016 Skevos Papamichail &lt;contact@skevosp.me&gt; (www.skevosp.me) 
