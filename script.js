let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
      a: {
        a: null,
        b: 'E',
        c: {
          a: true,
          b: 'C',
          c: 'test'
        },
        d: 'U'
      },
      b: {
       a: 'R',
       b: ['S', 4, 6, 'I'],
       c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
    }
  }


function firstRecursion (obj){
    const object = Object.values(obj);
    const string = [];
    object.forEach(letter => {
        if (typeof letter === 'string' && letter === letter.toUpperCase()){
        string.push(letter);
        } else if (letter && typeof letter === 'object'){
        string.push(firstRecursion(letter))
        }
    })
    return string.flat().join('')
}
console.log(firstRecursion(obj));

function secondRecursion (obj) {
    const object = Object.values(obj);
    const result = object.reduce((string,letter) => {
       if (typeof letter === 'string' && letter === letter.toUpperCase()){
            string += letter
       } else if (letter && typeof letter === 'object'){
            string += secondRecursion(letter);
        }
       return string
    },'')
    return result;
};
console.log(secondRecursion(obj));

function thirdRecursion (obj){
    const object = Object.values(obj);
    let result = '';
    for (letter of object)
      if (typeof letter === 'string' && letter === letter.toUpperCase()){
          result += letter
      } else if (letter && typeof letter === 'object'){
        result += thirdRecursion(letter)
      }
    return result
}
console.log(thirdRecursion(obj))



