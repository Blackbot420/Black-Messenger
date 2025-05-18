import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AuthForm({ onLogin }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');

  const handleSendCode = () => {
    if (email.includes('@gmail.com')) {
      setCodeSent(true);
      alert('کد به جیمیل شما ارسال شد (شبیه‌سازی)');
    } else {
      alert('فقط جیمیل رسمی قابل قبول است.');
    }
  };

  const handleVerify = () => {
    if (verifyCode === '123456') {
      const fakeUser = {
        id: Math.floor(100000 + Math.random() * 900000),
        name: 'کاربر ناشناس',
        email
      };
      onLogin(fakeUser);
    } else {
      alert('کد نادرست است');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{t('signup')}</h2>
      <input
        type="email"
        placeholder={t('email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!codeSent ? (
        <button onClick={handleSendCode}>{t('send')}</button>
      ) : (
        <>
          <input
            type="text"
            placeholder={t('verify_code')}
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
          <button onClick={handleVerify}>{t('send')}</button>
        </>
      )}
    </div>
  );
}
