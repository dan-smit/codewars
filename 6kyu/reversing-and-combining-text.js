// Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

// So what to do?
// Input: String containing different "words" separated by spaces

// 1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
//    (odd number of words => last one stays alone, but has to be reversed too)
// 2. Start it again until there's only one word without spaces
// 3. Return your result...
// Some easy examples:
// Input:  "abc def"
// Output: "cbafed"

// Input:  "abc def ghi 123"
// Output: "defabc123ghi"

// Input:  "abc def gh34 434ff 55_eri 123 343"
// Output: "43hgff434cbafed343ire_55321"

//My Solution

function reverse_and_combine_text(str){
    str = str.split(' ')
    while(str.length != 1){
    str = str.map(word => word.split('').reverse().join(''))
    let str2 = []
    if (str.length % 2) str.push('');
    for (let i=0; i<str.length; i+=2){
        str2.push(str[i] + str[i + 1]);
      }
      str = str2
      }
    return str[0]
  }