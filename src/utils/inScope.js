export default function inScope(action, scope) {
  let passes = false;
  if (!action.scope) {
    return true;
  }
  if (action.scope !== 'string') {
    passes = action.scope.map((d) => {
      return scope.includes(d);
    }).includes(true);
  } else {
    passes = scope.includes(action.scope);
  }
  console.log(passes);
  return passes;
}
