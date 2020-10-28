function findClosestBowler(tree, target=100) {

  let closestSoFar = tree.root;
  let leadingScore = closestSoFar.value.score;
  let leadingPlayers = new Set();
  leadingPlayers.add(closestSoFar.value.name);

  function checkBowler(bowler) {

    if(!bowler) return;

    if(bowler.value.score === target) {
      closestSoFar = bowler;
      if(leadingScore === target){
        leadingPlayers.add(bowler.value.name);
      } else {
        leadingScore = target;
        leadingPlayers.clear();
        leadingPlayers.add(bowler.value.name);
      }
      
    }

    const currentDistance = Math.abs(target - bowler.value.score);
    const closestDistance = Math.abs(target - leadingScore);


    if (currentDistance < closestDistance) {
      closestSoFar = bowler;
      leadingScore = bowler.value.score;
      leadingPlayers.clear();
      leadingPlayers.add(bowler.value.name);
    } else if (currentDistance === closestDistance){
      leadingPlayers.add(bowler.value.name);
    }


    if (target < bowler.value.score) {
      checkBowler(bowler.left);
    } else {
      checkBowler(bowler.right);
    }

  }

  checkBowler(closestSoFar);

  return leadingPlayers;

}

module.exports = findClosestBowler;
