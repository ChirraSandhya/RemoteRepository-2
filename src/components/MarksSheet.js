import React,{useRef} from 'react'

//function MarksSheet() {
    let MarksSheet =()=>{
        let phoneNoInputRef  = useRef();
        let nameInputRef   = useRef();
        let emailInputRef  = useRef();
        let engInputRef    = useRef();
        let telInputRef    = useRef();
        let hindiInputRef  = useRef();
        let mathsInputRef  = useRef();
        let phyInputRef    = useRef();
        let chemInputRef   = useRef();
        let statesInputRef = useRef();
        let genInputRef    = useRef();
      
        
        let summaryRef    = useRef();

        let phoneNoResultSpanRef  =  useRef();
        let nameResultSpanRef   =   useRef();
        let emailResultSpanRef  =   useRef();
        let engResultSpanRef    = useRef();
        let telResultSpanRef    = useRef();
        let hindiResultSpanRef  = useRef();
        let mathsResultSpanRef  = useRef();
        let phyResultSpanRef    = useRef();
        let chemResultSpanRef   = useRef();

   //regular Expressions
        let validateName = (inputRef,spanResultRef)=>{
         const nameRegExp = /^[A-Za-z\s'-]{2,30}$/;

         let result = nameRegExp.test(inputRef.current.value);

         if(result==true){

          spanResultRef.current.innerHTML = "Valid";
          spanResultRef.current.style.backgroundColor = "White";
          spanResultRef.current.style.color = "Green";
         }else{
    
          spanResultRef.current.innerHTML = "Invalid";
          spanResultRef.current.style.backgroundColor = "White";
          spanResultRef.current.style.color = "Red";
         }

        }
     let validateEmail = (inputRef ,spanResultRef)=>{
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         let result = emailRegex.test(inputRef.current.value);
         if(result==true){

          spanResultRef.current.innerHTML = "Valid";
          spanResultRef.current.style.backgroundColor = "White";
          spanResultRef.current.style.color = "Green";
         }else{
    
          spanResultRef.current.innerHTML = "Invalid";
          spanResultRef.current.style.backgroundColor = "White";
          spanResultRef.current.style.color = "Red";
         }
     }
     let validatePhoneNo = (inputRef , spanResultRef)=>{
          const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

         let result= phoneNumberRegex.test(inputRef.current.value);
          if(result==true){

               spanResultRef.current.innerHTML = "Valid";
               spanResultRef.current.style.backgroundColor = "White";
               spanResultRef.current.style.color = "Green";
              }else{
         
               spanResultRef.current.innerHTML = "Invalid";
               spanResultRef.current.style.backgroundColor = "White";
               spanResultRef.current.style.color = "Red";
              }
     }

 //Regular Expressions
        let calculate =()=>{
           let passMarks = 35;

      
      
      
                          let engMarks = Number(engInputRef.current.value);
      
                          engResultSpanRef.current.innerHTML = engMarks>=passMarks?"PASS":"FAIL"
      
                          let hindiMarks = Number(hindiInputRef.current.value);
      
                          hindiResultSpanRef.current.innerHTML = hindiMarks>=passMarks? "PASS":"FAIL"
      
                          let telMarks =Number( telInputRef.current.value);
      
      
                          telResultSpanRef.current.innerHTML = telMarks>=passMarks? "PASS":"FAIL"
      
                          let phyMarks = Number( phyInputRef.current.value);
      
                          phyResultSpanRef.current.innerHTML =phyMarks>=passMarks?"PASS":"FAIL"
      
                          let chemMarks = Number( chemInputRef.current.value);
      
                          chemResultSpanRef.current.innerHTML = chemMarks>=passMarks?"PASS":"FAIL"
      
                          let mathsMarks = Number( mathsInputRef.current.value);
      
                          mathsResultSpanRef.current.innerHTML = mathsMarks>=passMarks?"PASS":"FAIL"
      
                          let totalMarks = Number(engMarks+hindiMarks+telMarks+phyMarks+chemMarks+mathsMarks)
                          
                          let perc = totalMarks/600*100;
      
                          console.log(`Total marks of ${nameInputRef.current.value} are ${totalMarks} with ${perc}% `)
      
                          alert(`Total marks of ${nameInputRef.current.value} are ${totalMarks} with ${perc}% `)
         
                          if(engMarks>=35 &&
                           hindiMarks>=35 &&
                           telMarks>=35 &&
                           phyMarks>=35 &&
                           chemMarks>=35 &&
                           mathsMarks>=35)
                
                {
                    console.log("Student is passed in tenth")
                    summaryRef.current.innerHTML=` ${genInputRef.current.value} ${nameInputRef.current.value} from ${statesInputRef.current.value} paseed in tenth with total 
                    marks of ${totalMarks} and scored ${perc}%`
                }
                else{
                    console.log("Student is failed in tenth")
                    summaryRef.current.innerHTML=`${genInputRef.current.value} ${nameInputRef.current.value} from ${statesInputRef.current.value} failed in tenth with total 
                    marks of ${totalMarks} and scored ${perc}%`
                }
           }      
       let inputOnFocus =(inputRef,color)=>{
           inputRef.current.style.backgroundColor = color;
         
        }
        let inputOnBlur =(inputRef)=>{
           inputRef.current.style.backgroundColor ="";
        }
        let inputOnChange =(inputRef ,spanResultRef ,passMarks=35)=>{
          
           let marks = inputRef.current.value;
           
           if(marks>=0 && marks<=100){
                if(marks>=passMarks){
                     spanResultRef.current.innerHTML ="Pass";
                     spanResultRef.current.style.color="green";
                     spanResultRef.current.style.backgroundColor="white";
                }
                else{
                     spanResultRef.current.innerHTML ="Fail";
                     spanResultRef.current.style.color="red";
                     spanResultRef.current.style.backgroundColor="white";
                }
           }
           else{
                spanResultRef.current.innerHTML="Invalid Marks";
               
           }
          
        }
  return (
    <div>
         <form>
           <fieldset>
            <legend>Marks Sheet</legend>
            <div>
                 <label>Name</label>
                 <input type='text' placeholder='Enter Name' ref={nameInputRef}
                  onChange={()=>{validateName(nameInputRef,nameResultSpanRef)}}></input>
                  <span ref={nameResultSpanRef}></span>
            </div>
            <div>
               <label>Email</label>
               <input ref={emailInputRef}
               onChange={()=>{validateEmail(emailInputRef,emailResultSpanRef);}}></input>
               <span ref={emailResultSpanRef}></span>
            </div>
            <div>
                 <label>Gender</label>
                      Mis: <input type='radio' name='my gender' ref={genInputRef}></input>
                      Mr: <input type='radio' name='my gender' ref={genInputRef}></input>
                      others: <input type='radio' name='my gender' ref={genInputRef}></input>
                      <span></span>
            </div>
            <div>
               <label>Phone No</label>
               <input ref ={phoneNoInputRef} 
               onChange={()=>{validatePhoneNo(phoneNoInputRef,phoneNoResultSpanRef);}}></input>
               <span ref={phoneNoResultSpanRef}></span>
            </div>
            <div>
                 <label>English</label>
                 <input type='text' placeholder='Enter marks' ref={engInputRef}
                  onFocus={()=>{inputOnFocus(engInputRef,"blue")}} 

                  onChange={()=>{inputOnChange(engInputRef,engResultSpanRef)}}

                  onBlur={()=>{inputOnBlur(engInputRef)}} ></input>
                 <span ref = {engResultSpanRef}></span>
            </div>
            <div>
                 <label>Telugu</label>
                 <input type='text' placeholder='Enter marks' ref={telInputRef}
                  onFocus={()=>{inputOnFocus(telInputRef,"green")}} 

                  onChange={()=>{inputOnChange(telInputRef , telResultSpanRef)}}

                  onBlur={()=>{inputOnBlur(telInputRef)}}></input>
                 <span ref = {telResultSpanRef}></span>
            </div>
            <div>
                 <label>Hindi</label>
                 <input  type='text' placeholder='Enter marks' ref={hindiInputRef}
                 onFocus={()=>{inputOnFocus(hindiInputRef,"indigo")}} 

                 onChange={()=>{inputOnChange(hindiInputRef,hindiResultSpanRef)}}

                 onBlur={()=>{inputOnBlur(hindiInputRef)}}
                 ></input>
                 <span ref = {hindiResultSpanRef}></span>
            </div>
            <div>
                 <label>Maths</label>
                 <input type='text' placeholder='Enter marks' ref={mathsInputRef}
                 onFocus={()=>{inputOnFocus(mathsInputRef , "yellow")}} 

                 onChange={()=>{inputOnChange(mathsInputRef , mathsResultSpanRef)}}

                 onBlur={()=>{inputOnBlur(mathsInputRef)}}></input>
                 <span ref = {mathsResultSpanRef}></span>
            </div>
            <div>
                 <label>Physics</label>
                 <input type='text' placeholder='Enter marks' ref={phyInputRef}
                 onFocus={()=>{inputOnFocus(phyInputRef,"violet")}} 

                 onChange={()=>{inputOnChange(phyInputRef , phyResultSpanRef)}}

                 onBlur={()=>{inputOnBlur(phyInputRef)}}></input>
                 <span ref = {phyResultSpanRef}></span>
            </div>
            <div>
                 <label>Chemistry</label>
                 <input type='text' placeholder='Enter mar
                 ks' ref={chemInputRef}
                 onFocus={()=>{inputOnFocus(chemInputRef,"pink")}} 

                 onChange={()=>{inputOnChange(chemInputRef ,chemResultSpanRef)}}

                 onBlur={()=>{inputOnBlur(chemInputRef)}}></input>
                 <span ref = {chemResultSpanRef}></span>
            </div>
            <div>
                  <label for="states">Choose a State</label>
                  <select id="states" name="states" ref={statesInputRef}>
                       <option value="Telangana">Telangana</option>
                       <option value="Andhra Pradesh" >Andhra Pradesh</option>
                       <option value="Tamil Nadu" >Tamil Nadu</option>
                       <option value="goa" >Goa</option>
                       <option value="Karnataka">Karnataka</option>
                       <option value="Maharastra">Maharastra</option>
                       <option value="Odisha">Odisha</option>
                       <option value="Uttara Pradesh">Uttara Pradesh</option>
                       <option value="Rajasthan">Rajasthan</option>
                 </select>
                 <span></span>
            </div>
            <div>
              <button type='button' onClick={()=>{calculate()}}>Calculate</button>
              <button type='reset'>Reset</button>
            </div>
            <h2 ref = {summaryRef}></h2>

            </fieldset>

        </form>    
    </div>
  )
}

export default MarksSheet