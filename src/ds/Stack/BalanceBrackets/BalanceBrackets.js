function checkBrackets(str) {
  const codes = [
    { left: "{", right: "}", code: 1 },
    { left: "(", right: ")", code: 2 },
    { left: "[", right: "]", code: 3 }
  ];

  let lefts = codes.reduce((acc, inc) => {
    acc[inc.left] = inc.code;
    return acc;
  }, {});

  let rights = codes.reduce((acc, inc) => {
    acc[inc.right] = inc.code;
    return acc;
  }, {});

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    // console.log({ stack });
    if (lefts[str[i]]) {
      stack.push(lefts[str[i]]);
    }

    if (rights[str[i]]) {
      let code = stack.pop();
      if (code != rights[str[i]]) {
        return false;
      }
    }
  }
  if (stack.length) return false;

  return true;
}