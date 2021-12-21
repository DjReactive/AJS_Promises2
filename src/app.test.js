import GameSavingLoader from './app';

test('Checking get savingdata', (done) => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(data);
    done();
  });
});

test('Checking error async/await', (done) => {
  GameSavingLoader.load(true).then((error) => {
    expect(error).toEqual('Error data');
    done();
  });
});
