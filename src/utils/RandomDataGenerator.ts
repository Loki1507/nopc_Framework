export class RandomDataGenerator {
  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `user_${timestamp}@test.com`;
  }

  static generateRandomPhone(): string {
    return Math.random().toString().substring(2, 12);
  }

  static generateRandomPassword(length: number = 12): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  static generateRandomName(): string {
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  }

  static generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
