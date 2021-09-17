/*
Thank you for taking interest in my code.
*/ 
var calculate = document.getElementById("go");
var firstCurrency = document.getElementById("currency1");
var secondCurrency = document.getElementById("currency2");
var firstRate = document.getElementById("rate1");    
var secondRate = document.getElementById("rate2");



calculate.onclick = async function getData(){
    var FC1 = firstCurrency.value;
    var FC2 = secondCurrency.value;
    var val = firstRate.value;
    
    const checkFields = () =>{
        if(firstCurrency.value =='' || secondCurrency.value =='' || val == ''){
            alert("A field is missing a value")
        }
        else{

            const updateRate = (data) =>{
                
                 const finalResult = Object.values(data.rates)[0].rate_for_amount;
                 secondRate.value = parseFloat(finalResult).toFixed(2);
                }
            
            console.log('click works');

            
            const fetchData = async () =>{
            
            const url = `/api/${FC1},${FC2},${val}`;

            const response = await fetch (url);
            const result = await response.json();
            updateRate(result);
            

           
            }

            fetchData().catch(err => console.error(err));
            
    }
  }
  
  checkFields();
}
