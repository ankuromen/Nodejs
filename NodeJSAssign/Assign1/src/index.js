const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	
	const data=await fs.wrtiteFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.readFile(fileName,"utf-8")
	
	console.log(data)
	
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data=await fs.appendFile(fileName,fileContent)
	console.log(data)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const data=await fs.unlink(fileName)
	
}




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }