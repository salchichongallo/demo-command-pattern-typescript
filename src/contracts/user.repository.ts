import { User } from '../user';

export interface UserRepository
{
    /**
     * Find an user by its ID.
     *
     * @param {string} id
     * @returns {(Promise<User | null>)}
     * @memberof UserRepository
     */
    find(id: string): Promise<User | null>;
}
