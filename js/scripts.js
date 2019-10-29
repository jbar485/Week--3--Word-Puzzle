
$(document).ready(function(){
  $("form").submit(function(event){
    var string = $("input#sentence").val();
    var array = string.split("");
    console.log(array);

    for (i = 0; i < array.length; i++){
      if (array[i] === "a" ||array[i] ===  "e" ||array[i] ===  "i" || array[i] === "o" || array[i] === "u") {
        array[i] = "-";
      }
      else {
        array[i];

        console.log(array[i]);

      }
    }
    var finalArray = array.join("");
    $("#finally").text(finalArray);
    console.log(finalArray);

    event.preventDefault();



  });



});
