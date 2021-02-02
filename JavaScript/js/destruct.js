const aprendiendoJS={
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks:['React','VueJS', 'Angular']
}

//Destructuring es extraer valores de un objeto
console.log(aprendiendoJS);
let framework = aprendiendoJS.frameworks[1]
console.log(framework)
let versionD = aprendiendoJS.version.nueva
console.log(versionD)


//Destructuring forma nueva

let{ version,frameworks}= aprendiendoJS;
console.log(version);
console.log(frameworks)

let {anterior}= aprendiendoJS.version;
console.log(anterior)
