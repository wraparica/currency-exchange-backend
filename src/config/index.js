import 'dotenv/config';

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  frankfurter: {
    baseUrl: 'https://api.frankfurter.dev/v2/rate/',
    historical: 'https://api.frankfurter.dev/v2/rates',
    currencies: 'https://api.frankfurter.dev/v2/currencies',
  },
  clientOrigin: process.env.CLIENT_ORIGIN || '*',
};