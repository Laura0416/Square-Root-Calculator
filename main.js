function calculate(){
    console.log("hello");
    var starting_number = document.getElementById("input_number").value;
    var squared_number = Math.sqrt(starting_number);
    var result = squared_number.toFixed(3);
    document.getElementById("number_squared").innerHTML = result;
}
