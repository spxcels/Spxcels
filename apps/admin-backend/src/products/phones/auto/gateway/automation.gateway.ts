import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";

import { Server, Socket } from "socket.io";

/* ============================================
   LOG TYPE
============================================ */

export type AutomationLog = {
  type: "info" | "success" | "error";
  message: string;
};

/* ============================================
   GATEWAY
============================================ */

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class AutomationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  /* ============================================
     CONNECTION EVENTS
  ============================================ */

  handleConnection(client: Socket) {
    console.log("⚡ Admin connected:", client.id);
  }

  handleDisconnect(client: Socket) {
    console.log("❌ Admin disconnected:", client.id);
  }

  /* ============================================
     SEND LOG
  ============================================ */

  sendLog(modelId: number, log: AutomationLog) {

    if (!this.server || !modelId) {
      return;
    }

    this.server
      .to(`model-${modelId}`)
      .emit("automation-log", log);
  }

  /* ============================================
     JOIN MODEL ROOM
  ============================================ */

  @SubscribeMessage("join-model")
  joinModel(
    @MessageBody() modelId: number,
    @ConnectedSocket() client: Socket
  ) {

    if (!modelId) return;

    const room = `model-${modelId}`;

    client.join(room);

    console.log(`📡 Client ${client.id} joined ${room}`);
  }

  /* ============================================
     LEAVE MODEL ROOM
  ============================================ */

  @SubscribeMessage("leave-model")
  leaveModel(
    @MessageBody() modelId: number,
    @ConnectedSocket() client: Socket
  ) {

    const room = `model-${modelId}`;

    client.leave(room);

    console.log(`🚪 Client ${client.id} left ${room}`);
  }
}