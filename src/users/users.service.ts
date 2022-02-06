import { UsersDto } from './users.dto';
import { Injectable, NotFoundException } from '@nestjs/common'

@Injectable()
export class UsersService {
  users: UsersDto[] = []
  currentId: number = 0

  getAll(): UsersDto[] {
    return this.users
  }

  getById(id : number): UsersDto {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex > -1) {
      return this.users[userIndex]
    }else {
      throw new NotFoundException()
    }
  }

  addNewItem(usersDto: UsersDto): UsersDto {
    const newUser = {...usersDto, id: ++this.currentId }
    this.users.push(newUser)
    return newUser
  }

  deleteItem(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex > -1) {
      this.users.splice(userIndex,1)
    }else {
      throw new NotFoundException()
    }
  }

}
