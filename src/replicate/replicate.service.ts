import { Injectable } from '@nestjs/common';
import Replicate from 'replicate';
import fetch from 'cross-fetch';

@Injectable()
export class ReplicateService {
    private readonly replicate: Replicate;

    constructor() {
        this.replicate = new Replicate({
            auth: 'r8_BPASeaikeiTUY4OpfrCWcNV7CgxJX064gX9UT',
            fetch: fetch,
        });
    }

    async callReplicate(modelName: `${string}/${string}:${string}`, input: object) {
        const test = await this.replicate.run(modelName, {
            input,
        });
        console.log(test);
    }
}
