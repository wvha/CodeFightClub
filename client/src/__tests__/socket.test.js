// requires server to be running
import { 
  subscribeToSocket, 
  sendMessage, 
  getDateTimerSocket, 
  subscribeToGameSocket, 
  gameComplete, 
  joinWaitingRoom, 
  exitWaitingRoom 
} from '../socket/api.jsx'

test('should update leaderboard when people finish', () => {
  let finished = 0;
  
  const onScoreboardChange = (data) => {
    console.log('data', data);
    expect(data.length).toBe(finished);
  }
  
  subscribeToGameSocket(() => {}, onScoreboardChange);
console.log('subscribed to game socket')
  finished++;
  gameComplete();

  finished++;
  gameComplete();

  finished++;
  gameComplete();
});
