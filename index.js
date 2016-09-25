/**
 * New node file
 */
var crypto = require('crypto');
var compare = require('scmp');

module.exports = function (options){
	return new IEncrypt(options);
};

function IEncrypt(options){
	options = options || {};
	var key = options.key || crypto.randomBytes(32);
	var debug = options.debug || false;
	
	this.encrypt = function(obj){
		try{
			//serialize
			var original = typeof obj === 'object' ? JSON.stringify(obj) : (typeof obj === 'function' ? null : obj);
			
			//if serialization failed throw an error
			if(!original) throw new Error('Invalid type of object given for encryption');
			
			//initialization vector
			var vector = new Buffer(crypto.randomBytes(16));
			
			//new cipher
			var cipher = crypto.createCipheriv('aes256', key, vector);
			
			//the encrypted text
			var encrypted = cipher.update(original,'utf8','base64') + cipher.final('base64');
			
			//the signature for the combination of encrypted text and initialization vector
			var hash = this.sign(encrypted+vector.toString('base64'));
			
			//return token ecrypted.vector.hash
			return encrypted + "." + vector.toString('base64') + "." + hash;
		}
		catch(e){
			if(debug) console.error('An error occured while encrypting : %s',e.stack);
			return null;
		}
	};
	this.decrypt = function(text){
		var decipher,
			original,
			t,
			encrypted,
			vector,
			hash,
			new_hash;
		try{
			// split text and save each value (encrypted text,vector,hash)
			t=token.split(".");
			encrypted = t[0];
			vector = new Buffer(t[1], 'base64');
			hash = t[2];
			
			// calculate signature
			new_hash = this.sign(encrypted+t[1]);
			
			//check data integrity by comparing the two hash values 
			if(!compare(hash,new_hash)){
				throw new Error('Could not verify signature');
			}
			
			//new decipher
			decipher = crypto.createDecipheriv('aes256', key, vector);
		    
			//return the resulted object
			original = decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8');
			try{
				return JSON.parse(original);
			}
			catch(e){
				return original;
			}
		}
		catch(e){
			if(debug) console.error('An error occured while decrypting : %s',e.stack);
			return null;
		}
	};
	this.sign = function(obj, format){
		try{
			// Serialize object
			var serialized = typeof obj === 'object' ? JSON.stringify(obj) : (typeof obj === 'function' ? null : obj);
			
			// If not serialized properly throw an Error
			if(!serialized) throw new Error('Cannot serialize given type of object');
			
			// Set formating
			format = format || 'base64';
			
			// Generate and return HMAC
			return crypto.createHmac('sha256', key).update(serialized).digest(format);
		}
		catch(e){
			if(debug) console.error('An error occured while signing : %s',e.stack);
			return null;
		}
	}
}
