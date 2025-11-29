import { promises as fs } from "fs";



export const isFile = async (Path: string): Promise<boolean> => {
    try {
        const IsFile = (await fs.stat(Path)).isFile()
        return IsFile

    } catch (e) {
        return false
    }
}


export const isDir = async (Path : string) : Promise<Boolean> => { 
    try { 
        const isDir = (await fs.stat(Path)).isDirectory()
        return isDir
    }catch(e) {
        return false
    }
}








