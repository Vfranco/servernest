import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return '<pre>Sigga Server</pre>';
	}	
}
