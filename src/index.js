import app from './app.js';
import http from "http";
import os from 'os';
const host = os.hostname();
const server = http.createServer(app);
const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access the server at http://${host}:${PORT}`);
});
