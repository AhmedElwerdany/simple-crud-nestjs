import { UsersDto } from './users.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    getAll(): UsersDto[] {
        return this.usersService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id : string) {
        return this.usersService.getById(id)
    }

    @Post()
    createUser(@Body() usersDto: UsersDto){
        return this.usersService.addNewItem(usersDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteItem(id)
    }
}