import 'egg'
import { Repository, Connection } from 'typeorm'
import User from '../app/entity/user'

declare module 'egg' {
  interface Context {
    connection: Connection
    entity: {
      User: any
    }
    repo: {
      User: Repository<User>
    }
  }
}
