// src/bots/HumanCheckBot.js

class HumanCheckBot {
  constructor() {
    this.verifiedUsers = new Set();
  }

  // شبیه‌سازی کپچا ساده
  verifyUser(userId, answer) {
    // مثلا سوال: 2 + 3 = ؟ جواب درست: 5
    if (answer === 5) {
      this.verifiedUsers.add(userId);
      return true;
    }
    return false;
  }

  // چک کردن اینکه آیا کاربر تأیید شده است
  isUserVerified(userId) {
    return this.verifiedUsers.has(userId);
  }
}

export default HumanCheckBot;