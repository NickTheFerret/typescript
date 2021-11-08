"use strict";
var resume = {
    name: 'Nick Harris',
    career: 'Web Developer',
    description: 'I like computer coding',
};
console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("");
var interest = {
    tv: 'I like watching TV',
    pc: 'I like to build computers/upgrade them',
    game: 'I like to play video games',
    code: 'I love to code',
};
console.log("My Interest: ");
console.log("*" + interest.tv);
console.log("*" + interest.pc);
console.log("*" + interest.game);
console.log("*" + interest.code);
console.log("");
console.log("My Previous Experiences: ");
displayPosition("Walmart", "TA Stocking Associate", "Stocking and Unloading Trucks");
function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}
function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log("BAM: " + skillName);
    }
    else {
        console.log(skillName);
    }
}
console.log("");
console.log("My Skills: ");
displaySkill("Rock Climbing", false);
displaySkill("Playing The Trumpet", true);
displaySkill("Building Computers", true);
