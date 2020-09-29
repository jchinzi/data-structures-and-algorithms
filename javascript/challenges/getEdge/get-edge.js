'use strict';


function tripPlanner(graph, array){
  let originNode;
  let boolean = true;
  let cost = 0;
  graph.vertexes.forEach(node => {
  if (node.value === array[0]){
    originNode = node;
  }})
  for(let i=1; i<array.length; i++){
    let neighbors = graph.getNeighbors(originNode);
    if(!neighbors[array[i]]){
      return 'false, $0';
    } else {
      cost += neighbors[array[i]];
      if(array[i+1]){
        graph.vertexes.forEach(node => {
          if (node.value === array[i]){
            originNode = node;        
      }
    })  
  }
}
}
return `${boolean}, $${cost}`;
}

module.exports = tripPlanner;
