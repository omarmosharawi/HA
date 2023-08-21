//read file
const file = require ('fs');

file.readFile('./msg.txt','utf8',(error,data) => {
    if (error){
        console.log(error);
    }
    else {
        const msg = data.split (',');
        console.log (msg);
    }
});

console.log ('The file has been opened.');



//create file
const msgs = [
    'msg1','msg2','msg3','msg4','msg5','msg6','msg7'
];
const hello = msgs.join(',');

file.writeFile('./new.txt',hello,'utf8',error => {
    if (error) console.log (error);
    else console.log('File Written.')
});



//to edit the file (increase in file) or when file not defined create the file.
file.appendFile('./new.txt',hello,'utf8',error => {
    if (error) console.log (error);
    else console.log('File Written.')
});



//rename the file
file.rename('./msgs.txt','msgtest.txt',error => {
    if (error) console.log(error);
    else console.log('The file is Renamed.')
});



//remove the file
file.unlink('./filewasdeleted.txt',error => {
    if(error) console.log(error);
    else console.log ('Deleted process is done.')
});



//input and output
const RL = require('readline');
const rl = RL.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter your name : ",name =>{
    console.log(`Hello ${name}`);
    rl.close();
})
