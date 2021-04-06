import { Service } from 'egg';
import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export default class AppsService extends Service {
  public async load(name: string) {
    const fileName = path.resolve(
      this.app.baseDir,
      `config/apps/${name}/index.yaml`
    );

    try {
      const data = await fs.promises.readFile(fileName);

      return yaml.load(data.toString());
    } catch (e) {
      throw e;
    }
  }

  public async getPage(app: string, page: string) {
    const fullpath = path.join(`config/apps/${app}/pages`, page) + '.yaml';
    try {
      const data = await fs.promises.readFile(fullpath);
      return yaml.load(data.toString());
    } catch (e) {
      throw e;
    }
  }
}
