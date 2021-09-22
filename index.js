const path = require('path');
const fs = require('fs')
require('colors')

//Limpiamos la consola
console.clear();


const globalDir = __dirname.split(path.sep);
const baseDir = globalDir.slice(0,4).join(path.sep);
const options =  fs.readdirSync(baseDir,"utf-8");
const filteredOptions = options.filter((e)=>(!e.includes(".")))

console.log("====================================".green)
console.log("             ORGANIZE               ".green)
console.log("====================================\n".green)


var inquirer = require('inquirer');
const { organize } = require('./organize');


const dirOptions = [
    {
        type:'rawlist',
        message:"select your folder to"+ " organize".red,
        name:"selectedDir",
        choices:filteredOptions
    }
   ]


const extOptions = [
    {
        type:'checkbox',
        message:"select your te extensions to "+ " organize".red,
        name:"selectedExtensions",
        choices: ['txt','pdf','mp4','docx','jpg']
    }
]



inquirer
  .prompt(dirOptions)
  .then(({selectedDir}) => {
    
    inquirer
        .prompt(extOptions)
        .then(({selectedExtensions})=>{
            organize( path.join(baseDir,selectedDir),selectedExtensions)
        })
        .catch((err) => {
            throw err      
          })

  })
  .catch((err) => {
    throw err      
  });