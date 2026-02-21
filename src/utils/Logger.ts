export class Logger {
  static log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  static error(message: string) {
    console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
  }

  static info(message: string) {
    console.info(`[${new Date().toISOString()}] INFO: ${message}`);
  }

  static warn(message: string) {
    console.warn(`[${new Date().toISOString()}] WARN: ${message}`);
  }
}
