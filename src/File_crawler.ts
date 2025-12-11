import {promises as fs} from "fs" 
import {isFile,isDir} from "./utils.js"
import path from "path";
import { fileURLToPath } from "url";


const Files_format: string[] = [".ts",".js"]

const Explored_Files = new Set<string>()
const Files = new Set<string>()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function File_Scanner (RootFile : string) {
    

    if (Explored_Files.has(RootFile)) return; 
    Explored_Files.add(RootFile)

    if (await isDir(RootFile)) {

        const entires = await fs.readdir(RootFile)
        if (entires.length < 0) return; 

        for (const entry of entires) {
            const fullPath = path.join(RootFile, entry); 
            await File_Scanner(fullPath);
        }
        return;
    }

    if (Files_format.some(ext => RootFile.endsWith(ext))) {
        Files.add(RootFile)
    }

}


const File_to_Scan = ""
await File_Scanner(path.join(__dirname , File_to_Scan))







