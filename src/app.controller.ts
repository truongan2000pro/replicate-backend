import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ReplicateService } from './replicate/replicate.service';
@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly replicateService: ReplicateService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    test() {
        return this.replicateService.callReplicate(
            'stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf',
            { prompt: 'batman' },
        );
    }
}
