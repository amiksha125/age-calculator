let userInput = document.getElementById('date');

// allow to select only todays date or past 
//disable future dates
userInput.max = new Date().toISOString().split("T")[0];

