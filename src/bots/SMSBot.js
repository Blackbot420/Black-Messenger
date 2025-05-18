// src/bots/SMSBot.js

class SMSBot {
  constructor() {
    this.smsMessages = []; // آرایه پیامک‌ها
  }

  // ارسال پیامک
  sendSMS(to, text) {
    const message = {
      id: Date.now(),
      to,
      text,
      date: new Date(),
      status: 'sent'  // sent, delivered, failed
    };
    this.smsMessages.push(message);
    console.log('SMS sent:', message);
  }

  // دریافت تمام پیامک‌ها
  getAllSMS() {
    return this.smsMessages;
  }

  // تغییر وضعیت پیامک (مثلاً delivered یا failed)
  updateStatus(id, status) {
    const msg = this.smsMessages.find(m => m.id === id);
    if (msg) {
      msg.status = status;
      console.log(`SMS status updated to ${status} for id ${id}`);
    }
  }
}

export default SMSBot;