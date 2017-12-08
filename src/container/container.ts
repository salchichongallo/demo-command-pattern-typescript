import * as inversify from 'inversify';

import { Container as Contract } from '../contracts';

export class Container implements Contract
{
    private readonly container: inversify.Container;

    constructor()
    {
        this.container = new inversify.Container;
    }

    public bind(abstract: string, concrete: any): void
    {
        this.makeInjectable(concrete);

        this.container.bind(abstract).to(concrete);
    }

    public make<T>(concrete: any): T
    {
        this.makeInjectable(concrete);

        return this.container.resolve(concrete);
    }

    private makeInjectable(concrete: any): void
    {
        if (this.shouldInject(concrete))
        {
            inversify.decorate(inversify.injectable(), concrete);
        }
    }

    private shouldInject(concrete: any): boolean
    {
        return ! Reflect.hasOwnMetadata(
            inversify.METADATA_KEY.PARAM_TYPES,
            concrete,
        );
    }
}
