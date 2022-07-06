module.exports = function toReadable (number) {
    number += '';
    let result_str = '';
    let arr_units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr_tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let xs_how_to_call_it = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    if(number.length === 1){
        result_str += arr_units[parseInt(number[0])]
    }

    if(number.length === 2){
      if(number[0] === '1'){
        result_str += arr_tens[parseInt(number[1])]
      }else{
        result_str += xs_how_to_call_it[parseInt(number[0]) - 2];
        if(number[1] != '0') {
          result_str += " " + arr_units[parseInt(number[1])];
        }
      }
    }

    if(number.length === 3){
      result_str += arr_units[parseInt(number[0])] + " " + "hundred";
      if(number[1] === '0'){
        if(number[2] != '0'){
          result_str += " " + arr_units[parseInt(number[2])]
        }
      }
      else if(number[1] === '1'){
        result_str += " " + arr_tens[parseInt(number[2])]
      }
      else{
        result_str += " " + xs_how_to_call_it[parseInt(number[1]) - 2];
        if(number[2] != '0'){
          result_str += " " + arr_units[parseInt(number[2])];
        }
      }
    }
    return result_str;
}
