import { inject } from './container/inject';

import { Handler, UserRepository } from './contracts';
import { FindUser } from './find-user.command';

export class FindUserHandler implements Handler
{
    private repository: UserRepository;

    constructor(
        @inject('repository.user') repository: UserRepository,
    )
    {
        this.repository = repository;
    }

    public async handle(command: FindUser)
    {
        console.log(`Finding user with id: ${command.id}...`);

        const user = await this.repository.find(command.id);

        console.log(`User found: ${user.id}`);
    }
}
