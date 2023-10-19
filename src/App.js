import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';


function App() {
  let dhoniDetails =["Mahender Sing","Dhoni",49,"Cricketer","India"];
  let[fn,ln,age,profession,country] =dhoniDetails;
  console.log(fn);
  console.log(ln);
  console.log(age);
  console.log(profession);
  console.log(country);

 let prabhasDetails = {
  name: "Prabhas",
  industry :"Indian Film Industry",
  maritalstatus :"Single",
 location :"Hyderabad",
};


  let{name:n,industry:i,maritalstatus:ms,location:l} = prabhasDetails;

  console.log(n);
  console.log(i);
  console.log(ms);
  console.log(l);

  let viratkohli ={
  name :"Virushka",
  profession:"Cricket",
  team:"India",
  nationality:"Inadian"
 };

 
 //let a=viratkohli;
// let b=a;
 // let c=b;


  let a = {...viratkohli};
  let b = {...viratkohli};
  let c = {...viratkohli};



  console.log(viratkohli);
  console.log(b);
  console.log(a);

  let rohitSharma={
  name :"Rohit Sharma",
  profession:"Cricket",
  team:"India",
  nationality:"Inadian"
  };
  let hardhikPandya={
   name :"Hardhik Pandya",
    profession:"Cricket",
    team:"India",
   nationality:"Inadian"
  };

let ravindraJadeja = {...viratkohli};
  ravindraJadeja.name ="Ravindra Jadeja";
  console.log(ravindraJadeja);

let sehwag ={...rohitSharma};
sehwag.name="Virender Sehwag";
console.log(sehwag);


 let dhoniFirstName   = dhoniDetails[0];
let dhoniLastName    = dhoniDetails[1];
let dhoniAge         = dhoniDetails[2];
let dhoniProfession  = dhoniDetails[3];
let dhoniCountry     = dhoniDetails[4]; 

//spread operator
  let planets  = ["Mercury","Venus","Earth","Mars"];
  let planets1 = [...planets,"Jupiter"];
  let planets2 = [...planets1,"Saturn"];
  let planets3 = [...planets2,"Uranus"];

  console.log(planets);
  console.log(planets1);
  console.log(planets2);
  console.log(planets3);

  let calculateResult  = (...subjectMarks)=>{

   console.log(subjectMarks);
    
 };
 calculateResult(55,66,77.88,99,87,76);

 

  return (
    <div className="App">
      <h1>Array Object Destructuring</h1>
     
     <MarksSheet/>
    </div>
  
  );
  }

export default App;
