import react from "react";
// import ThisPersonDoesNotExist from 'thispersondoesnotexist-js';
//
// const dnte = new ThisPersonDoesNotExist();
//
// dnte.getImage().then(res  => {
//     console.log('result->', res);
// }).catch(err  => {
//     console.log('error->', err);
// });



const SinglePerson = (props) =>{
    return (
        <div className="SinglePersonDiv">
            <h3>Imię: {props.fname}</h3>
            <h3>Nazwisko: {props.sname}</h3>
            <h3>Płeć: {props.gender}</h3>
        </div>
    );
}

export default SinglePerson;