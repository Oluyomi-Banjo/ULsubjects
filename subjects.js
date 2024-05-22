let question = prompt("Please enter your three favourite subjects separated by a comma");
const subjects = question.split(",");
for (let i=0; i< 3; i++){
    alert(subjects[i]);
    }

