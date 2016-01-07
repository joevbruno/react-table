export const port = '1337';
export let host = 'http://localhost';
if (process.env.NODE_ENV === 'production') {
  host = 'http://127.0.0.1';
}

const endpoints = {
  core: 'core',
  login: 'login',
  signup: 'signup',
  reset: 'reset',
  forgot: 'forgot',
  posts: 'blog',
  apps: 'apps',
  sessions: 'sessions',
  transactions: 'transactions',
  orders: 'orders',
  products: 'stripe/sendRequest',
  skus: 'skus',
  charges: 'charges',
  notifications: 'notifications',
  plans: 'plans',
  tours: 'tours',
  refunds: 'refunds',
  records: 'records',
  events: 'events',
  invoices: 'invoices'
};
const API = {};
Object.keys(endpoints).map((point) => API[point] = `${host}:${port}/${endpoints[point]}`);
export default API;
