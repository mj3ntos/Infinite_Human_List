import React from "react";


const  name = ["Rafal", "Arek", "Mirek", "Konrad", "Michal", "Agnieszka", "Kaja", "Klaudia",
    "Tedeusz", "Marika", "Sebastian", "Agnieszka", "Justyna", "Kornel", "Ola"];
const secoundName = ["Mencel", "Rostera", "Blazej", "Zak", "Stonoga", "Duda", "Kozidrak", "Roksa",
    "Mroz", "Dwojak", "Mazur", "Matyszkiewicz", "Rodziewicz", "Ragan", "Zlatan"];
const gender = ["Mezczyzna", "Kobieta"];
let i=1;


const generatePerson = () => {
    let randomName = Math.floor(Math.random() * 15);
    let randomSName = Math.floor(Math.random() * 15);
    let random = Math.floor(Math.random());
    return {
        personName: name[randomName],
        personSecoundName: secoundName[randomSName],
        personGender: gender[random]
    }
};

const person = [];

while(i<=100){
    person.push(generatePerson());
    i++;
};





