import 'egg'
import { Repository, Connection } from 'typeorm'
import Role from '../app/entity/role'
import User from '../app/entity/user'

declare module 'egg' {
  interface Context {
    connection: Connection
    entity: {
      Role: any
      User: any
    }
    repo: {
      Role: Repository<Role>
      User: Repository<User>
    }
  }
}
