const fs = require('fs');
const path =  require('path')

function organize(finalPath, extensions){
    const organizeDir =  path.join(finalPath,'organize');

    //Crear carpeta organize en el directorio si no existe
    !fs.existsSync(organizeDir) &&
    fs.mkdirSync(organizeDir)

    //Leer archivos de carpeta raiz
    const files = fs.readdirSync(finalPath, 'utf-8')

    //filtrar archivos en base a las extensiones elegidas
    const filterFiles = files.filter((file)=>{
       for (let i = 0; i < extensions.length; i++) {
           if(file.includes(extensions[i])){
               return true
           }
       }

    })
console.log(filterFiles , extensions)
    //Crear carpetas para las extensiones
    extensions.forEach((ext)=>{
        if(!fs.existsSync( path.join(organizeDir,`${ext}`))){
            fs.mkdirSync( path.join(organizeDir,`${ext}`))
        }
       
    })

    //Mover archivo de extensiones a su carpeta correspondiente
    filterFiles.forEach((file)=>{
        const fileExt = path.extname(file).slice(1,);
        
        fs.renameSync(finalPath + `\\${file}`, organizeDir + `\\${fileExt}\\${file}`)
    })
}

module.exports = {
    organize
}











//Leer archivos de organize
// const files = fs.readdirSync(path.join(__dirname, 'organize'), 'utf-8')

// //console.log(files)
// console.log( files)

// getFiles(files)

// function getFiles(files){
//     const txt = files.filter((e)=>e.includes('.txt'))
//     const jpg = files.filter((e)=>e.includes('.jpg'))
//     const mp4 = files.filter((e)=>e.includes('.mp4'))
//     const pdf = files.filter((e)=>e.includes('.pdf'))
//     const doc = files.filter((e)=>e.includes('.doc'))

//     //Checar si hay archivos y crear carpetas
//     txt.length >=1 &&(
//         !fs.existsSync('./organize/txt')&&
//         fs.mkdirSync('./organize/txt')
//     )

//     jpg.length >=1 &&(
//         !fs.existsSync('./organize/jpg')&&
//         fs.mkdirSync('./organize/jpg')
//     )

//     mp4.length >=1 &&(
//         !fs.existsSync('./organize/mp4')&&
//         fs.mkdirSync('./organize/mp4')
//     )

//     pdf.length >=1 &&(
//         !fs.existsSync('./organize/pdf')&&
//         fs.mkdirSync('./organize/pdf')
//     )

//     doc.length >=1 &&(
//         !fs.existsSync('./organize/doc')&&
//         fs.mkdirSync('./organize/doc')
//     )




//     //Mover objetos a su carpeta
//         txt.forEach(e => {
//             fs.renameSync(`./organize/${e}`,`./organize/txt/${e}`)
//         });

//         jpg.forEach(e => {
//             fs.renameSync(`./organize/${e}`,`./organize/jpg/${e}`)
//         });

//         mp4.forEach(e => {
//             fs.renameSync(`./organize/${e}`,`./organize/mp4/${e}`)
//         });

//         pdf.forEach(e => {
//             fs.renameSync(`./organize/${e}`,`./organize/pdf/${e}`)
//         });

//         doc.forEach(e => {
//             fs.renameSync(`./organize/${e}`,`./organize/doc/${e}`)
//         });
//     }


