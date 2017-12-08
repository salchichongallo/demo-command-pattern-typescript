import { Command } from './command';

/**
 * Represents a command handler.
 *
 * @export
 * @interface Handler
 */
export interface Handler
{
    /**
     * Handle the current command.
     *
     * @param {Command} command
     * @memberof Handler
     */
    handle(command: Command): void;
}
