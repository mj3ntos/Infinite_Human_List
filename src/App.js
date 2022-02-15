import React from 'react';
import SinglePerson from "./Components/SinglePerson";
import MoreAndMorePeople from "./Components/MoreAndMorePeople";

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

const generate = ( records ) =>{
  while(i<=records){
    person.push(generatePerson());
    i++;
  };

};

generate(100);


function App() {
  return (
    <div className="App">
        <MoreAndMorePeople
          items={person}
        />

    </div>
  );
}

export default App;
