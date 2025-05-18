import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fa: {
    translation: {
      "signup": "ثبت‌نام",
      "email": "ایمیل",
      "password": "رمز عبور",
      "verify_code": "کد تأیید",
      "send": "ارسال",
      "write_message": "پیام خود را بنویسید..."
    }
  },
  en: {
    translation: {
      "signup": "Sign Up",
      "email": "Email",
      "password": "Password",
      "verify_code": "Verification Code",
      "send": "Send",
      "write_message": "Write your message..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa',
    interpolation: { escapeValue: false }
  });

export default i18n;