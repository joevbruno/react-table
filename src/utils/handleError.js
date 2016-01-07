export default function handleError(error) {
  console.log('ERROR OCCURRED');
  return {
    type: 'ERROR',
    domain: 'GLOBAL',
    payload: error
  };
}
