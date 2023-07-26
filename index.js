// root.js
function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }
function introduction(firstname) {
    return `Hi, my name is ${firstname}.`;
  }
  
  function introductionWithLanguage(firstname, language) {
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(firstname, language = "JavaScript") {
    return `Hi, my name is ${firstname} and I am learning to program in ${language}.`;
  }
  