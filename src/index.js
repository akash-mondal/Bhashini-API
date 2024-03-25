import app from './app.js';
import http from "http";
const server = http.createServer(app);
const PORT = 3003;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
