// src/bots/MasterBot.js

class MasterBot {
  constructor(bots) {
    this.bots = bots; // آرایه‌ای از نمونه‌های ربات‌ها
  }

  // راه‌اندازی مجدد همه ربات‌ها
  restartAllBots() {
    this.bots.forEach(bot => {
      if (typeof bot.restart === 'function') {
        bot.restart();
      }
    });
    console.log('تمام ربات‌ها راه‌اندازی مجدد شدند.');
  }

  // بررسی سلامت ربات‌ها (شبیه‌سازی)
  checkBotsHealth() {
    return this.bots.map(bot => ({
      botName: bot.constructor.name,
      status: 'OK' // اینجا می‌توان کدهای بررسی سلامت واقعی گذاشت
    }));
  }
}

export default MasterBot;