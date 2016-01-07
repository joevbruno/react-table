export const Actions = {};
export const ActionTypes = {};

function capitalize(string) {
  return string.toLowerCase().replace( /\b\w/g, (m) => {
    return m.toUpperCase();
  });
}
function defaultAction({type, domain, ...args}, payload) {
  return { type, domain, payload, ...args };
}

function addAction(allActions, store, actionName, type, action, domain, ...args) {
  store = capitalize(store.toLowerCase());
  if (!allActions[store]) { allActions[store] = {}; }
  if (allActions[store][actionName]) {
    throw new Error(`${allActions[store][type]} already exists at ${allActions[store]}. You probably want to namespace this action by passing a domain or array of domains` );
  } else {
    const defaultData = {type, domain, ...args};
    allActions[store][actionName] = action ? action : defaultAction.bind(this, defaultData);
    if (!ActionTypes[store]) { ActionTypes[store] = {}; }
    ActionTypes[store][type] = type;
  }
}

export function registerAction(domain, type, action, ...args) {
  if (!type) { throw new Error('You must specifiy a type when registering an action'); }
  // build the camelcase action name from the type
  const actionName = type.toLowerCase().split(/_/).map((item, index) => {
    if (index !== 0) { return capitalize(item); }
    return item;
  }).join('');

  // set the action within the Actions object / map
  if (typeof domain !== 'string') {
    domain.forEach((store) => {
      return addAction(Actions, store, actionName, type, action, domain, ...args);
    });
  } else {
    addAction(Actions, domain, actionName, type, action, domain, ...args);
  }
}
