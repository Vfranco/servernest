import { SubscribeMessage, WebSocketGateway, MessageBody, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class MonitorGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	
	private logger: Logger = new Logger('MonitorGateway');
	@WebSocketServer() server :Server;

	afterInit(server: Server) {
		this.logger.log('Init');
	}

	handleDisconnect(client: Socket) {
		this.logger.log(`Client disconnected: ${client.id}`);
	}

	handleConnection(client: Socket, ...args: any[]) {
		this.logger.log(`Client connected: ${client.id}`);
	}
}
