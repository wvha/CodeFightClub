import { 
  subscribeToSocket, 
  sendMessage, 
  subscribeToSocket, 
  getDateTimerSocket, 
  subscribeToGameSocket, 
  gameComplete, 
  joinWaitingRoom, 
  exitWaitingRoom 
} from '../'

test('should update leaderboard when people finish', () => {
  let finished = 0;
  
  const onScoreboardChange = (data) => {
    console.log('data', data);
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