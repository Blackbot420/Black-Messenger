// src/bots/SpamBot.js

let lastMessage = '';

export function isSpam(newMessage) {
  if (newMessage.trim() === '') return false;

  if (newMessage === lastMessage) {
    return true; // پیام تکراری (اسپم)
  }

  lastMessage = newMessage;
  return false;
}