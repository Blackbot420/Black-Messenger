// src/bots/SecureBot.js

class SecureBot {
  constructor() {
    this.securityLogs = [];
    this.failedLoginAttempts = 0;
  }

  // ثبت لاگ امنیتی
  logSecurityEvent(event) {
    const logEntry = {
      id: Date.now(),
      event,
      timestamp: new Date()
    };
    this.securityLogs.push(logEntry);
    console.log('Security Log:', logEntry);
  }

  // بررسی تلاش‌های ناموفق ورود
  recordFailedLogin() {
    this.failedLoginAttempts++;
    this.logSecurityEvent(`Failed login attempt #${this.failedLoginAttempts}`);

    // اگر تلاش‌ها زیاد شد، هشدار بده
    if (this.failedLoginAttempts >= 5) {
      this.logSecurityEvent('Too many failed login attempts. Possible attack.');
    }
  }

  // ریست کردن شمارش تلاش‌های ناموفق
  resetFailedLoginCounter() {
    this.failedLoginAttempts = 0;
  }

  // یک نمونه ساده رمزنگاری (می‌تواند توسعه یابد)
  simpleEncrypt(text) {
    return btoa(text);  // Base64 encode
  }

  simpleDecrypt(encoded) {
    return atob(encoded);  // Base64 decode
  }
}

export default SecureBot;