import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Settings({ user, onUpdateUserName }) {
  const { t } = useTranslation();

  // اطلاعات پروفایل
  const [displayName, setDisplayName] = useState(user.name);
  const [privacy, setPrivacy] = useState({
    siteFingerprint: false,
    hideProfile: false,
  });
  const [contactPrivacy, setContactPrivacy] = useState({}); // { contactId: { hideName: true/false, hideId: true/false } }

  // بخش چت با هوش‌مصنوعی (ChatGPT)
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  // وقتی نام تغییر کرد، به والد هم گزارش بده
  useEffect(() => {
    onUpdateUserName(displayName);
  }, [displayName]);

  const handleCopyId = () => {
    navigator.clipboard.writeText(String(user.id))
      .then(() => alert(t('id_copied')))
      .catch(() => alert(t('copy_failed')));
  };

  const togglePrivacy = (key) => {
    setPrivacy(p => ({ ...p, [key]: !p[key] }));
  };

  const toggleContactPrivacy = (contactId, field) => {
    setContactPrivacy(cp => ({
      ...cp,
      [contactId]: {
        ...cp[contactId],
        [field]: !(cp[contactId]?.[field] || false)
      }
    }));
  };

  const sendAiQuery = async () => {
    // اینجا باید API خودتون یا سرور ChatGPT رو فراخوانی کنید.
    // در اینجا فقط شبیه‌سازی شده:
    setAiResponse('در حال جستجو...');
    setTimeout(() => {
      setAiResponse(`جواب شبیه‌سازی‌شده به: "${aiQuery}"`);
    }, 1000);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* ۱. نمایش پروفایل */}
      <div style={{ marginBottom: 30, textAlign: 'center' }}>
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}`}
          alt="avatar"
          style={{ borderRadius: '50%', width: 80, height: 80 }}
        />
        <h2>{displayName}</h2>
        <button onClick={handleCopyId}>{t('copy_id')}</button>
      </div>

      {/* ۲. تغییر نام */}
      <div style={{ marginBottom: 30 }}>
        <label>{t('change_name')}:</label>
        <input
          type="text"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          placeholder={t('enter_name')}
        />
      </div>

      {/* ۳. تنظیمات حریم خصوصی */}
      <div style={{ marginBottom: 30 }}>
        <h3>{t('privacy_settings')}</h3>
        <label>
          <input
            type="checkbox"
            checked={privacy.siteFingerprint}
            onChange={() => togglePrivacy('siteFingerprint')}
          /> {t('site_fingerprint')}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={privacy.hideProfile}
            onChange={() => togglePrivacy('hideProfile')}
          /> {t('hide_profile')}
        </label>
      </div>

      {/* ۴. تنظیمات حریم خصوصی برای مخاطبین */}
      <div style={{ marginBottom: 30 }}>
        <h3>{t('contact_privacy')}</h3>
        {user.contacts?.map(c => (
          <div key={c.id} style={{ padding: '8px 0', borderBottom: '1px solid #ccc' }}>
            <strong>{c.name}</strong>
            <label style={{ marginLeft: 10 }}>
              <input
                type="checkbox"
                checked={contactPrivacy[c.id]?.hideName || false}
                onChange={() => toggleContactPrivacy(c.id, 'hideName')}
              /> {t('hide_name')}
            </label>
            <label style={{ marginLeft: 10 }}>
              <input
                type="checkbox"
                checked={contactPrivacy[c.id]?.hideId || false}
                onChange={() => toggleContactPrivacy(c.id, 'hideId')}
              /> {t('hide_id')}
            </label>
          </div>
        ))}
        {!user.contacts?.length && <p>{t('no_contacts')}</p>}
      </div>

      {/* ۵. درباره سایت */}
      <div style={{ marginBottom: 30 }}>
        <h3>{t('about')}</h3>
        <p>{t('about_text')}</p>
      </div>

      {/* ۶. چت با ربات هوش مصنوعی */}
      <div>
        <h3>{t('ai_chat')}</h3>
        <textarea
          rows={3}
          style={{ width: '100%' }}
          value={aiQuery}
          onChange={e => setAiQuery(e.target.value)}
          placeholder={t('ask_ai')}
        />
        <button onClick={sendAiQuery}>{t('send')}</button>
        {aiResponse && (
          <div style={{ marginTop: 10, padding: 10, background: '#f0f0f0', borderRadius: 4 }}>
            {aiResponse}
          </div>
        )}
      </div>
    </div>
);
}