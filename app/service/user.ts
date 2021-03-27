import { Service } from 'egg';

export default class UserService extends Service {
  public async findAll() {
    return await this.ctx.repo.User.find();
  }
}
