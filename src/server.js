import app from './app.js';
import { config } from './config/index.js';

const port = process.env.PORT || config.port;

app.listen(port, '0.0.0.0', () => {
  console.log(`Currency API server running on port ${port}`);
});