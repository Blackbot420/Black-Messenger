// src/components/ChatWindow.jsx

import React, { useState } from 'react';
import { isValidMessage, formatDate } from '../utils/helpers';

export default function ChatWindow() {
  const user = { name: 'کاربر ناشناس' };

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // ارسال پیام
  const sendMessage = () => {
    if (!isValidMessage(newMessage)) return;

    const message = {
      id: Date.now(),
      sender: user.name || 'کاربر ناشناس',
      text: newMessage,
      status: 'sent' // sent | delivered | read
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  // تغییر وضعیت آخرین پیام (sent -> delivered -> read -> sent)
  const changeLastMessageStatus = () => {
    setMessages(prevMessages => {
      if (prevMessages.length === 0) return prevMessages;

      const lastMessage = prevMessages[prevMessages.length - 1];
      let newStatus = 'sent';
      if (lastMessage.status === 'sent') newStatus = 'delivered';
      else if (lastMessage.status === 'delivered') newStatus = 'read';
      else if (lastMessage.status === 'read') newStatus = 'sent';

      return [
        ...prevMessages.slice(0, -1),
        { ...lastMessage, status: newStatus }
      ];
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h3>گفت‌وگو</h3>

      <div style={{ border: '1px solid #ccc', height: 300, overflowY: 'scroll', padding: 10, marginBottom: 10 }}>
        {messages.length === 0 && <p>هنوز پیامی وجود ندارد</p>}

        {messages.map(msg => (
          <div key={msg.id} style={{ marginBottom: 10 }}>
            <strong>{msg.sender}:</strong> {msg.text}
            <div style={{ fontSize: 12, marginTop: 2, color: '#666' }}>
              {/* نمایش تاریخ و ساعت ارسال پیام */}
              <small>{formatDate(msg.id)}</small>
            </div>
            <div style={{ fontSize: 12, marginTop: 2 }}>
              {msg.status === 'sent' && (
                <span style={{
                  display: 'inline-block',
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '16px',
                  fontWeight: 'bold'
                }}>0</span>
              )}

              {msg.status === 'delivered' && (
                <span style={{
                  display: 'inline-block',
                  width: 24,
                  height: 16,
                  borderRadius: 12,
                  backgroundColor: 'white',
                  border: '1px solid black',
                  color: 'black',
                  textAlign: 'center',
                  lineHeight: '16px',
                  fontWeight: 'bold'
                }}>0+1</span>
              )}

              {msg.status === 'read' && (
                <span style={{
                  display: 'inline-block',
                  width: 24,
                  height: 16,
                  borderRadius: 12,
                  backgroundColor: 'red',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '16px',
                  fontWeight: 'bold'
                }}>1</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="نوشتن پیام..."
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        style={{ width: '80%', padding: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: '8px 16px', marginLeft: 10 }}>
        ارسال
      </button>

      <button onClick={changeLastMessageStatus} style={{ marginTop: 10, padding: '6px 12px' }}>
        تغییر وضعیت پیام آخر
      </button>
    </div>
  );
}