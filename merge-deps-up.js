
let mergeObj = function(src, dest) {
	dest = dest || {}
	src = src || {}
	for(let key in src) {
		if(!dest[key]) {
			dest[key] = src[key]
		}
	}
	return dest
}

let merge = function(src, dest) {
	if(typeof src !== 'object' || src instanceof Buffer) {
		
		src = JSON.parse(src.toString())
	}
	if(typeof dest !== 'object' || dest instanceof Buffer) {
		dest = JSON.parse(dest.toString())
	}
	
	for(let objName of ['dependencies', 'devDependencies', 'scripts']) {
		dest[objName] = mergeObj(src[objName], dest[objName])
	}
	
	return JSON.stringify(dest, null, "\t")
}

let mergeFiles = function(srcPath, destPath) {
	var fs = require('fs')

	var src = fs.readFileSync(srcPath)
	var dest = fs.readFileSync(destPath)
	return merge(src, dest)
}

merge.mergeFiles = mergeFiles

module.exports = merge