import { Role, User } from './users.interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'owner',
                password: 'owner',
                role: Role.OWNER,
            },
            {
                userId: 2,
                username: 'worker',
                password: 'worker',
                role: Role.WORKER,
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
