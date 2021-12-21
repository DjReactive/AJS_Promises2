import read from './modules/reader';
import json from './modules/parser';

export default class GameSavingLoader {
  static load(forceError = false) {
    return (async () => {
      try {
        let reading = await read();
        if (forceError) throw new Error('Error data');
        const data = await json(reading);
        return data;
      } catch (error) {
        return 'Error data';
      }
    })();
  }
}
