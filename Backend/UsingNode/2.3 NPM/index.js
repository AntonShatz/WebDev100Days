import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    {  
      message: "Type in your url : ",
      name: "URL",
    }
  ])
  .then((answers) => {
      const url = answers.URL;
      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream('qr-img.png'));

      fs.writeFile('weburl.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// import generateName from "sillyname";
// import superheroes from "superheroes";

// var supeHeroName = superheroes.random();
// var sillyname = generateName();
// console.log(`My name is ${sillyname}.`);
// console.log(`My super hero name is : ${supeHeroName}`)
