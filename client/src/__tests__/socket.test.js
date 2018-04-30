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
    expect(data.length).toBe(finished);
  }
  
  subscribeToGameSocket(() => {}, onScoreboardChange);
  finished++;
  gameComplete();

  finished++;
  gameComplete();

  finished++;
  gameComplete();
});
