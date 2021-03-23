import { Service } from 'egg';

/**
 * Dynamic Service
 */
export default class Dynamic extends Service {
  /**
   * sayHi to you
   * @param id - your name
   */
  public async getPage(id: string) {
    console.log(id);
    return Promise.resolve('xxxxx');
  }
}
