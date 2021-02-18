/*
*
*
*       Complete the handler logic below
*       
*       
*/
function numStrSplitter(input){
  let num = input.match(/[.\d\/]+/g) || ["1"];
  let str = input.match(/[a-zA-Z]+/g)[0];
  return [num[0],str];
}

function checkDiv(input){
  let nums = input.split('/');
  if(nums.length > 2){
    return false;
  }
  return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numStrSplitter(input)[0];
    let nums = checkDiv(result);
    if(!nums){return undefined}
    let num1 = nums[0];
    let num2 = nums[1] || "1";
    result = parseFloat(num1) / parseFloat(num2);
    if(isNaN(num1) || isNaN(num2)){
      return undefined
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result = numStrSplitter(input)[1].toLowerCase();
    switch (result){
      case "km":
        return "km";
      case "mi":
        return "mi";
      case "kg":
        return "kg";
      case "lbs":
        return "lbs";
      case "gal":
        return "gal";
      case "l":
        return "L";
      default:
        return undefined;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch (unit){
      case "km":
        return "mi";
      case "mi":
        return "km";
      case "kg":
        return "lbs";
      case "lbs":
        return "kg";
      case "gal":
        return "L";
      case "l":
        return "gal";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch (unit){
      case "km":
        return "kilometers";
      case "mi":
        return "miles";
      case "kg":
        return "kilograms";
      case "lbs":
        return "pounds";
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      default:
        return "unknown unit";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    let unit = initUnit.toLowerCase();
    switch (unit){
      case "km":
        result = initNum / miToKm;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      default:
        return result = undefined;
    }
    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
