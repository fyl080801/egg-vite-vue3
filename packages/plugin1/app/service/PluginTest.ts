import { Service } from 'egg';

/**
 * Test Service
 */
export default class PluginTest extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async pluginSayHi(name: string) {
    return `hi, ${name} plugin`;
  }
}
