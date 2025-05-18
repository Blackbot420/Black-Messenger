// src/bots/BlockListBot.js

class BlockListBot {
  constructor() {
    this.blockedUsers = new Set();  // ذخیره شناسه کاربران بلاک شده
  }

  // اضافه کردن کاربر به لیست بلاک
  blockUser(userId) {
    this.blockedUsers.add(userId);
    console.log(`User ${userId} blocked.`);
  }

  // حذف کاربر از لیست بلاک
  unblockUser(userId) {
    this.blockedUsers.delete(userId);
    console.log(`User ${userId} unblocked.`);
  }

  // بررسی بلاک بودن کاربر
  isBlocked(userId) {
    return this.blockedUsers.has(userId);
  }
}

export default BlockListBot;