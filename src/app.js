import read from './modules/saveload';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});
