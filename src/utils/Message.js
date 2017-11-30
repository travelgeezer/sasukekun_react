const methods = ['success', 'error', 'info', 'warning', 'warn', 'loading'];

const Message = {};

methods.forEach(method => {
  Message[method] = (error, duration) => {
    if (error.status === 500) {
      console.log(error);
    } else {
      const content = typeof error === 'object' ? error.message : error;
      console.log(duration);
    }
  };
});

export default Message;
