import { UserRepository } from './contracts';
import { User } from './user';

const delay = async (secs: number) =>
    new Promise((resolve, reject) => setTimeout(resolve, secs * 1000));

export class UserRepositoryImpl implements UserRepository
{
    /**
     * Find an user by its ID.
     *
     * @param {string} id
     * @returns {(Promise<User | null>)}
     * @memberof UserRepositoryImpl
     */
    public async find(id: string): Promise<User | null>
    {
        return delay(2).then(() => new User(id));
    }
}
