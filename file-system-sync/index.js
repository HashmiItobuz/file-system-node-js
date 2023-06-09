const { clear } = require('console');
const fs = require('fs');
const prompt = require('prompt-sync')();

const choice = prompt("Do you want to use File System (yes/no): ");

if(choice == "yes" || choice =='y' || choice =="YES" || choice == "Y"){
    console.log("\n");
    console.log("Press 1 for create directory");
    console.log("Press 2 for create file inside directory");
    console.log("Press 3 for read file inside directory");
    console.log("Press 4 for add content in file inside directory");
    console.log("Press 5 for rename file inside directory");
    console.log("Press 6 for delete file inside directory");
    console.log("Press 7 for delete directory");
    console.log("Press 8 for create file");
    console.log("Press 9 for read file");
    console.log("Press 10 for add content in file");
    console.log("Press 11 for rename file");
    console.log("Press 12 for delete file");
    console.log("Press 0 to exit");
    allOperation();
}else if(choice == "no" || choice =='n' || choice =="NO" || choice == "N") {
    return;
}
else{
    console.log("Invalid Input!!");
}

function allOperation() {
    let folder = "";
    let newFile = "";
    let fileName = "";
    let deleteFile = "";
    let content = "";
    let result = "";
    let oldFile = "";
    console.log("\n");
    let number = prompt("Enter your choice :");
    console.log("\n");

    switch(Number(number)) {

        // create directory
        case 1:
            const directory = prompt("Enter your directory name :");
            fs.mkdirSync(`${directory}`); 
            console.log("\nCreated directory successfully!!");
            allOperation();
            break;
        // create file inside directory
        case 2:
            folder = prompt("Enter your directory name :");
            fileName = prompt("Enter your file name with extention:");
            fs.writeFileSync(`${folder}/${fileName}`, "");
            console.log("\nCreated File successfully!!");
            allOperation();
            break;
        //read file inside directory
        case 3:
            folder = prompt("Enter your directory name :");
            fileName = prompt("Enter your file name with extention: ");
            result = fs.readFileSync(`${folder}/${fileName}`, "UTF-8");
            console.log(result);
            allOperation();
            break; 
        // append in file inside directory
        case 4:
            folder = prompt("Enter your directory name :");
            fileName = prompt("Enter your file name  with extention: ");
            content = prompt("Enter your content :");
            fs.appendFileSync(`${folder}/${fileName}`, `${content}`);
            console.log("\nEnter your content Sussfully!!");
            allOperation();
            break; 
        // rename file inside directory
        case 5:
            folder = prompt("Enter your directory name :");
            oldFile = prompt("Enter your old file name with extention: ");
            newFile = prompt("Enter your new file name with extention: ");
            fs.renameSync(`${folder}/${oldFile}`, `${folder}/${newFile}`);
            console.log("\nRename your file successfully!!"); 
            allOperation();   
            break; 
        //  delete file inside directory  
        case 6:
            folder = prompt("Enter your directory name :");
            deleteFile = prompt("Enter your file name with extention:");
            fs.unlinkSync(`${folder}/${deleteFile}`);
            console.log("\nDeleted File successfully!!");
            allOperation();
            break;
        // delete directory
        case 7:
            let deleteDire = prompt("Enter your Directory name :"); 
            fs.rmSync(`${deleteDire}`, {recursive: true});
            console.log("\nDeleted Directory successfully!!");
            allOperation();
            break;
        // create file
        case 8:
            fileName = prompt("Enter your file name with extention:");
            fs.writeFileSync(`${fileName}`, "");
            console.log("\nCreated File successfully!!");
            allOperation();
            break;
        // read file
        case 9:
            fileName = prompt("Enter your file name with extention: ");
            result = fs.readFileSync(`${fileName}`, "UTF-8");
            console.log(result);
            allOperation();
            break;
        // append in file 
        case 10:
            fileName = prompt("Enter your file name  with extention: ");
            content = prompt("Enter your content :");
            fs.appendFileSync(`${fileName}`, `${content}`);
            console.log("\nEnter your content Sussfully!!");
            allOperation();
            break; 
        // rename file 
        case 11:
            oldFile = prompt("Enter your old file name with extention: ");
            newFile = prompt("Enter your new file name with extention: ");
            fs.renameSync(`${oldFile}`, `${newFile}`);
            console.log("\nRename your file successfully!!"); 
            allOperation();   
            break;
        // delete file
        case 12:
            deleteFile = prompt("Enter your file name with extention:");
            fs.unlinkSync(`${deleteFile}`);
            console.log("\nDeleted File successfully!!");
            allOperation();
            break;
        // Exit from loop
        case 0: 
            console.log("Exit successfully !!\n");
            return;        
        default:
            console.log("Invalid input");
            allOperation();    
    }
}



