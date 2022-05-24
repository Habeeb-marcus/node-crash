const fs = require('fs');
const { off } = require('process');

// reading files:

// fs.readFile('./docs/blog1.txt', (err, data)=> {
//  if(err){
//      console.log(err);
//  }
//  console.log(data.toString())
// })


// writing file:

// fs.writeFile('./docs/blog1.txt', 'Team mEd guys, my nigga', ()=> {
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'Hello my team mEd guys', ()=> {
//     console.log('file was written')
// })

// directories:
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err)=> {
 if(err) {
     console.log(err)
 }
 console.log('folder created')
})
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
     //unlink() is th method we use to delete a file
    fs.unlink('./docs/deleteme.txt', (err)=> {
        console.log(err)
    })
    console.log('file deleted  ')
}