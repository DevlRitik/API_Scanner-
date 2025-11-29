import {promises as fs} from "fs" 
import {isFile,isDir} from "../src/utils.js"

const Files_format = [".ts",".js"]


async function File_crawler (
    RootPath : string
) { 
    const Files = []
    
    const RootFiles = await fs.readdir(RootPath)
    if (RootFiles.length < 1) return {isError : true, Error : "No File exists in the Directory"}

    for (let i = 0; i < RootFiles.length; i++) {
        
        await isFile(RootFiles[i]!) ? Files.push(RootFiles[i]) : 



        
    } 

    
    
    


}




