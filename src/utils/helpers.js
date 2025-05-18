// src/utils/helpers.js

// تابع ساده برای فرمت تاریخ به صورت شمسی (می‌توان بعداً با کتابخانه‌های بهتر جایگزین کرد)
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('fa-IR', options);
}

// تابع برای بررسی معتبر بودن یک پیام (مثلاً خالی نبودن)
export function isValidMessage(text) {
  return text && text.trim().length > 0;
}
