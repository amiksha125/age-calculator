let userInput = document.getElementById('date');

// allow to select only todays date or past 
//disable future dates
userInput.max = new Date().toISOString().split("T")[0]; //Date() returns todaysdate object, toISO converts object to string and 
// then splits uses T separator to split the string into date month year timezone and into an array of subtring
//  then [0] retrives the todays date and its set to max allowed date.

//function for calculating age 

//add onclick = "calculateAge()" attribute to button tag so that when u click the button it will trigger this func.

let result = document.getElementById("result");

function calculateAge(){

    let birthDate = new Date(userInput.value);

    let date1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;// months starts with 0 here
    let year1 = birthDate.getFullYear();

    let today = new Date(); // returns todays date object

    let date2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let date3, month3, year3;

    year3 = year2 - year1;

    if(month2 >=  month1){
        month3 =  month2 - month1;  // now is may and you born on feb 5 - 2
    } else {
        year3--; // now is may you born on 10 2025-- = 2024 , 12 + 5 - 10 = 7 month difference

        month3 = 12 + month2 - month1;
    }

    
    if(date2 >= date1){
        date3 = date2 - date1;
    } else {   
        // suppose u born on 21 aug 2021 and today is 10 july 2025, diff is year = 4, month = year --; and 12 + 7 - 8 = 11 so 
        // 3 year 11 month and date we have to get the exact no of days in that perticular month of birth
        //do month-- , 10 month , and 30 + 10 - 21 = 19 final is 3 years 10 months and 19 days old.
        
        month3--;

        date3 = getDaysInMonth(year1, month1) + date2 - date1;


    }
    //if month3 gets negative

    if(month3 < 0){
        month3 = 11;
        year3--;
    }

    console.log(date3, month3, year3);

    result.innerHTML = `You are <span>${year3}</span> years, <span>${month3}</span> months and <span>${date3}</span> days old.`

}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate(); //we specify month and set date to 0 to return no of days in that month only
}
