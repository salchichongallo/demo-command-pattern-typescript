import { Command } from './contracts';

/**
 * Command Find User. Acts like a DTO.
 *
 * @export
 * @class FindUser
 * @implements {Command}
 */
export class FindUser implements Command
{
    public readonly id: string;

    constructor(id: string)
    {
        this.id = id;
    }
}
