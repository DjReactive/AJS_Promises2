import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const reading = await read();
        const data = await json(reading);
        return JSON.parse(data);
      } catch (error) {
        return 'ITS ' + error;
      }
    })();
  }
}
