# Backend API Scanner for Postman

A Node.js tool that **automatically scans a backend project**, detects all API routes, and generates a **Postman collection-ready JSON** for easy testing. This is especially useful for large projects where manually documenting endpoints is time-consuming.  

---

## Features

- **Recursive Folder Scanning**: Traverse the entire project directory to detect `.js` and `.ts` files.  
- **Nested Imports Handling**: Follows local imports/require statements to ensure all routes are captured.  
- **Duplicate Prevention**: Keeps track of scanned files to avoid scanning the same file twice.  
- **Postman-ready Output**: Generates structured JSON/text that can be imported directly into Postman.  

---

## Installation

```bash
git clone https://github.com/yourusername/backend-api-scanner.git
cd backend-api-scanner
npm install
