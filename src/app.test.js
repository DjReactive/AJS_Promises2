import json from './modules/parser';
import GameSavingLoader from './modules/saveload';

jest.mock('./modules/parser', () => {
  return {
    json: jest.fn().mockImplementation(() => {
      throw 'error';
    }),
  }
});

test('Checking get savingdata', (done) => {
  const obj = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(obj);
    done();
  });
});

test('Should throw an error async/await', (done) => {

  GameSavingLoader.load().then((error) => {
    expect(error).toThrow(new Error ('json func error'));
    done();
  });
});
