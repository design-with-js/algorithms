module.exports = function(count, fn, context = {}, ...args) {
  let start = new Date();

  while (count--) {
    fn.apply(context, args);
  }

  let end = new Date();

  return end - start;
};
