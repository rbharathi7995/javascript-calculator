let calculation=localStorage.getItem('calculation')||'';
    //display the calculation when the page loads 
    cal();
    function updateCalculation(value){
     calculation+=value;
     // console.log(calculation)
      cal();
      localStorage.setItem('calculation',calculation);
      
    }
    function cal(){
    document.querySelector('.js-final').innerHTML=`${calculation}`;
      }