////////////////////////////////////////////////////////////////////////
///
//   TEXT DOLLAR SAMPLE 1
///
const money = (num) => {
    const oneToTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const twentyRange = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const hundredRange = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const numbers = (num) => {
      if ( num < 10 ) return oneToTen[num] ;
      if ( num < 20 ) return twentyRange[num%10] ;
      //subtract 2 bc there are only 8 items in array
      if ( num < 100) return hundredRange[Math.floor(num/10) - 2] + oneToTen[num%10] ;
      // less than 1000
      if ( num < 1000 ) return oneToTen[Math.floor(num/100)] + "Hundred" + numbers((num%100));
      // less than 100,000`
      if ( num < 100000 ) return numbers(Math.floor(num/1000)) + "Thousand" + numbers(num%1000);
      // less than 1 million
      if ( num < 1000000 ) return numbers(Math.floor(num/100000)) + "Hundred" + numbers(num%100000);
      // less than 1 billion
      if ( num < 1000000000 ) return numbers(Math.floor(num/1000000)) + "Million" + numbers(num%1000000);
      
    };
    
    let result = numbers(num);
    if ( num === 0 ) result = "Zero";
    return result + "Dollars";
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// MAX RANGE SUM`
const largestAverage = (input) => {
    // assuming input is a string convert to an array of numbers
    let numArr = input.split(' ').map((string) => parseInt(string));
    console.log(numArr)
    //remove first element of array
    numArr.shift();
    console.log(numArr)
    let firstSum = 0; secondSum = 0;
    for(let i = 0; i < numArr.length; i++){
      secondSum = Math.max(0, secondSum + numArr[i]);
      console.log(secondSum)
      firstSum = Math.max(secondSum, firstSum);
      console.log(firstSum)
    }
    return firstSum;
  };
  
  console.log(largestAverage("6 -1 -2 -3 4 6 7 8"));
  
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  //TEXT DOLLAR SAMPLE 2 

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
function intToWords(rawValue){
	var num=rawValue,
		a=['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '],
		b=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
		c=['thousand', 'million',''],
		words='';

	num=('000000000'+num.toString()).substr(-9) // Make number into a predictiable nine character string
		.match(/.{3}/g); // Split string into chuncks of three numbers then reverse order of returned array

	for(var i=0;i<c.length;i++){
		var n=num[i],
			str='';
		str+=(words!='')?' '+c[c.length-1-i]+' ':'';
		str+=(n[0]!=0)?(a[Number(n[0])]+'hundred '):'';
		n=n.substr(1);
		str+=(n!=0)?((str!='')?'and ':'')+(a[Number(n)]||b[n[0]]+' '+a[n[1]]):'';
		words+=str;
	}
let newWord = toTitleCase(words).replace(/ /g,'')
  console.log(newWord)
return newWord
}

