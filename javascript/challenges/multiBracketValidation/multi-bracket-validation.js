const Stack = require('../../data-structures/stacksAndQueues/stacks.js');

function multiBracketValidation(input){
  let openStack = new Stack;
  let openBracket = '{[(';

  for(let i = 0; i<input.length; i++){
    if(openBracket.includes(input[i])){
      openStack.push(input[i]);
    } 
    else if(input[i] === '}'){
      if (openStack.isEmpty()){
        return false;
      } else {
        if (openStack.peek() === '{'){
          openStack.pop();
        } else return false;
      }
      }
    else if(input[i] === ']'){
      if(openStack.isEmpty()){
        return false;
      } else {
        if (openStack.peek() === '['){
          openStack.pop();
        } else return false;
      }
      }
    else if(input[i] === ')'){
      if(openStack.isEmpty()){
        return false;
      } else {
        if (openStack.peek() === '('){
          openStack.pop();
        } else return false;
      }
    }
      }
  if(openStack.isEmpty()){
    return true;
  } else return false;

};

module.exports = multiBracketValidation;