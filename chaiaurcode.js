const form=document.querySelector('form');
//This usecase will give us empty value if we write it here outside the event, so try to write inside the event to get the current value after the user enters the value.
//const height=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height==="" || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height: ${height}`;
  }else if(weight==="" || weight<0 ||isNaN(weight)){
    results.innerHTML=`Please give a valid weight: ${weight}`;
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    //showing the results
    results.innerHTML=`<span>${bmi}</span>`;
  }
})
