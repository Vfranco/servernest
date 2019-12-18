import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonalService {

    response(): string {
        return '<pre>Request Send</pre>';
    }
}
