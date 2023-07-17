

//My Solution
// TODO: Define the two functions
const isValidHKPhoneNumber = num => {
    //initialize a string for number comparison
    const n = '0123456789'
    //convert num to array of characters
    //if char is a number, convert it to '&' (comparison later)
    //if char is a whitespace, it remains unchanged. anything else is replaced
    //with 'X'
    const filter = [...num].map((e => n.includes(e) ? '&' : e == ' ' ? e : 'X' )).join('')
    //return the result of filter matching with the '&&&& &&&&' pattern
    return filter === '&&&& &&&&'
  }
  
  const hasValidHKPhoneNumber = num => {
    const n = '0123456789'
    const filter = [...num].map((e => n.includes(e) ? '&' : e == ' ' ? e : 'X' )).join('')
    //function is same as the other, except the last step.
    //we check to see if the num string includes the pattern
    return filter.includes('&&&& &&&&')
  }