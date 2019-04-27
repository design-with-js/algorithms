var history = require("./voterHistory");

function getWinner() {
  let voteBank = history.reduce((acc, { voterId, candidateId }) => {
    if (acc[voterId]) {
      console.log("voter fraud");
    } else {
      acc[voterId] = candidateId;
    }
    return acc;
  }, {});

  

  // return voteBank;
}

console.log(getWinner());
