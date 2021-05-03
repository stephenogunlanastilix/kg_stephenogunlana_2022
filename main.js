var input = [10,300,5]

//get Input Size 
var size = input.length

//List of possible interger vales
var possiblenumbers = ["Zero" , "One" , "Two" , "Three" , "Four" , "Five" , "Six" , "Seven" , "Eight" , "Nine"];

//Variable to get String
var Str_Arr = []

//For all numbers in the array
for(var i=0; i<size; i++){

          var numbers = input[i]
        
           let num_str = '';
           
           //Splits number String into array
           let split_arr = numbers.toString().split("")
           
           //Gets new Split Array Length            
            let split_arrlength = split_arr.length
            
            //For all numbers in the array
            for(var j=0; j<split_arrlength; j++ ){

             //Pass possiblenumbers in String Variable
             num_str += possiblenumbers[split_arr[j]];      
            }
           
           //Pass looped values to final Array
           Str_Arr[i] = num_str
          
  }

console.log(Str_Arr.toString())
