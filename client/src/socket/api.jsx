const socket = io.connect();
console.log(socket);
// subscribe to a Socket
// pass in callback that gets run when recieving messages
export const subscribeToSocket = (name, cb) => {
  // subscribe to messages
  socket.on('message', (message) => {
    console.log('recieved message', message);
    cb(message);
  });
  // now tell server we want to subscribe
  socket.on('connect', (data) => {
    socket.emit('subscribeToMessage', 'name');
  })
  
};

export const sendMessage = (message) => {
  console.log('sending message', message)
  socket.emit('message', message);
};

// timer 
const timerSocket = io('/timer');

export const subscribeToTimerSocket = (cb) => {
  timerSocket.on('test', () => {
    console.log('time namespace works');
  })

  timerSocket.emit('startTimer');

  timerSocket.on('countdown', (num) => {
    console.log(num);
    cb(num)
  })
}