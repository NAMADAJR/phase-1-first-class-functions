function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return "before all";
}

function returnsANamedFunction() {
  function namedFunction() {}
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
