import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import ChatWindow from './components/ChatWindow';
import Settings from './components/Settings';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('chat');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return (
    <div>
      <nav style={{ padding: 10, background: '#eee', display: 'flex', gap: 10 }}>
        <button onClick={() => setPage('chat')}>{t('chat')}</button>
        <button onClick={() => setPage('settings')}>{t('settings')}</button>
      </nav>

      <main>
        {page === 'chat' && <ChatWindow user={user} />}
        {page === 'settings' && <Settings user={user} />}
      </main>
    </div>
  );
}
