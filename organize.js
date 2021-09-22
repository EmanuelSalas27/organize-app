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










