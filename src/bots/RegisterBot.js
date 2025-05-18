// src/bots/RegisterBot.js

class RegisterBot {
  constructor() {
    this.registeredUsers = new Set();
  }

  registerUser(userId) {
    if (this.registeredUsers.has(userId)) {
      return { success: false, message: 'کاربر قبلاً ثبت‌نام شده است' };
    }
    this.registeredUsers.add(userId);
    return { success: true, message: 'ثبت‌نام با موفقیت انجام شد' };
  }

  isRegistered(userId) {
    return this.registeredUsers.has(userId);
  }
}

export default RegisterBot;