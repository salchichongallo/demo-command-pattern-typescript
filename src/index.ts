import { Container } from './container';
import { Handler } from './contracts';
import { FindUser } from './find-user.command';
import { FindUserHandler } from './find-user.handler';
import { UserRepositoryImpl } from './user.repository';

const container = new Container;

container.bind('repository.user', UserRepositoryImpl);

const handler = container.make<Handler>(FindUserHandler);

handler.handle(new FindUser('123'));
