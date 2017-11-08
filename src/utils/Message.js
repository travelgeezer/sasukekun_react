import { message } from 'antd';

message.config({
  top: 300,
  duration: 2
});

const methods = ['success', 'error', 'info', 'warning', 'warn', 'loading'];

const Message = {};

methods.forEach(method => {
  Message[method] = (error, duration) => {
    if (error.status === 500) {
      console.log(error);
    } else {
      const content = typeof error === 'object' ? error.message : error;
      return message[method](content, duration);
    }
  };
});

export default Message;
