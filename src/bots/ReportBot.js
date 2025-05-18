// src/bots/ReportBot.js

class ReportBot {
  constructor() {
    this.reports = [];  // آرایه گزارش‌ها
  }

  // افزودن گزارش جدید
  addReport(report) {
    // report می‌تواند یک آبجکت مثل { reporterId, reportedId, reason, date }
    this.reports.push({
      ...report,
      date: new Date()
    });
    console.log('Report added:', report);
  }

  // دریافت همه گزارش‌ها
  getReports() {
    return this.reports;
  }

  // حذف گزارش با شناسه خاص (مثلاً ایندکس)
  removeReport(index) {
    if (index >= 0 && index < this.reports.length) {
      this.reports.splice(index, 1);
      console.log(`Report at index ${index} removed.`);
    }
  }
}

export default ReportBot;// src/bots/ReportBot.js

class ReportBot {
  constructor() {
    this.reports = []; // آرایه گزارش‌ها
  }
  
  // افزودن گزارش جدید
  addReport(report) {
    // report می‌تواند یک آبجکت مثل { reporterId, reportedId, reason, date }
    this.reports.push({
      ...report,
      date: new Date()
    });
    console.log('Report added:', report);
  }
  
  // دریافت همه گزارش‌ها
  getReports() {
    return this.reports;
  }
  
  // حذف گزارش با شناسه خاص (مثلاً ایندکس)
  removeReport(index) {
    if (index >= 0 && index < this.reports.length) {
      this.reports.splice(index, 1);
      console.log(`Report at index ${index} removed.`);
    }
  }
}

export default ReportBot;