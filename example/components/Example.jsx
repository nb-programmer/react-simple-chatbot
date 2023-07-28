import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot, { ChatBotWidget } from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true
  }
];

const steps2 = [
  {
    id: '1',
    message: 'Hello World2',
    end: true
  }
];

async function send_test(message) {
  console.log("Send message", message);
  await new Promise(r => {
    console.log("Sending", message);
    setTimeout(r, 2000);
  }).then(() => console.log("Sent"));

  return async function*() {
    console.log("Receiving");
    yield new Promise(r => setTimeout(() => r("Hello"), 2000));
    console.log("Recieved 1");
    yield new Promise(r => setTimeout(() => r("Hey"), 2000));
    console.log("Recieved 2");
  };
};

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBotWidget steps={steps} onUserSend={send_test} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
