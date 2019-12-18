import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitorService {

    response():string {
        return `<pre>Access Denied</pre>`;
    }
}
