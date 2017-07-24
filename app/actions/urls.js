const database = {
  development: 'http://192.168.1.51:3001/',
  production: 'https://applierapp.com/',
};
export const baseUrl = database[process.env.NODE_ENV];

// signin
export const signInUrl = `${baseUrl}api/v1/users/login`;

export const positionsUrl = `${baseUrl}api/v1/positions`;
export const positionRequestsUrl = `${baseUrl}api/v1/position_requests`;
