// src/bots/CallBot.js

class CallBot {
  constructor() {
    this.calls = []; // آرایه‌ای برای نگهداری تماس‌ها
  }

  // ثبت تماس جدید
  addCall({ id, from, to, status, timestamp }) {
    this.calls.push({
      id: id || Date.now(),
      from,
      to,
      status: status || 'ringing', // ringing, connected, ended
      timestamp: timestamp || new Date()
    });
  }

  // تغییر وضعیت تماس بر اساس شناسه تماس
  updateCallStatus(id, newStatus) {
    const call = this.calls.find(c => c.id === id);
    if (call) {
      call.status = newStatus;
    }
  }

  // دریافت همه تماس‌ها
  getAllCalls() {
    return this.calls;
  }

  // دریافت تماس‌های خاص (مثلاً فقط تماس‌های فعال)
  getCallsByStatus(status) {
    return this.calls.filter(c => c.status === status);
  }
}

export default CallBot;