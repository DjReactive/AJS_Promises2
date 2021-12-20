import read from './modules/reader';
import json from './modules/parser';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response)).then((data) => data);
  }
}
