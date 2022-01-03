var fs = require('fs')

var dataFromModule2 = fs.readFileSync('./sample-submodule-2/body.txt', 'utf-8');
var dataFromModule3 = fs.readFileSync('./sample-submodule-2/sample-submodule-3/intro.txt', 'utf-8');

fs.appendFileSync('newfile.txt', dataFromModule3, function(err){
    if(err){
        throw new Error(err);
    }else{
        console.log('Module 3 appended successfully')
    }
});

fs.appendFileSync('newfile.txt', dataFromModule2, function(err){
    if(err){
        throw new Error(err);
    }else{
        console.log('Module 2 appended successfully')
    }
});