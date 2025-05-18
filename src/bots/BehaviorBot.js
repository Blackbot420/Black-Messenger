// src/bots/BehaviorBot.js

class BehaviorBot {
  constructor() {
    this.userActivity = {};  // ذخیره اطلاعات فعالیت کاربران به شکل { userId: { messageCount, loginCount, lastMessageTime } }
  }

  // ثبت پیام جدید از کاربر
  recordMessage(userId) {
    if (!this.userActivity[userId]) {
      this.userActivity[userId] = { messageCount: 0, loginCount: 0, lastMessageTime: null };
    }
    const userData = this.userActivity[userId];
    userData.messageCount++;
    userData.lastMessageTime = new Date();

    // تشخیص پیام‌های سریع پشت سر هم (مثلاً کمتر از 1 ثانیه)
    if (userData.lastMessageTime - (userData.previousMessageTime || 0) < 1000) {
      console.warn(`User ${userId} is sending messages too quickly.`);
    }

    userData.previousMessageTime = userData.lastMessageTime;
  }

  // ثبت ورود کاربر
  recordLogin(userId) {
    if (!this.userActivity[userId]) {
      this.userActivity[userId] = { messageCount: 0, loginCount: 0, lastMessageTime: null };
    }
    this.userActivity[userId].loginCount++;
  }

  // دریافت آمار کلی کاربر
  getUserStats(userId) {
    return this.userActivity[userId] || null;
  }
}

export default BehaviorBot;
