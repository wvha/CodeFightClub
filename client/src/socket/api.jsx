const socket = io.connect();
console.log(socket);
// subscribe to a Socket
// pass in callback that gets run when recieving messages
export const subscribeToSocket = (name, cb) => {
  // subscribe to messages
  socket.on('message', (message) => cb(null, message));
  // now tell server we want to subscribe
  socket.on('connect', (data) => {
    socket.emit('subscribeToMessage', name);
  })
  
};

export const sendMessage = (message) => {
  socket.emit('message', message);
};
