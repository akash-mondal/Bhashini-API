import app from './app.js';
import http from "http";
import * as logger from "./utils/logger.js";
const server = http.createServer(app);
const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
