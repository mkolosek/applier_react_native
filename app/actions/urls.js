const database = {
  development: 'http://192.168.1.51:3001/'
};
// export const baseUrl = 'http://localhost:3000/v1/'; // database.development ; //
export const baseUrl = database.development; // database.staging; // database.production; //

// signin
export const signInUrl = baseUrl + 'users/sign_in';

export const positionsUrl = baseUrl + 'api/v1/positions';
