// import * as supertest from "supertest";
import { EventEmitter } from "events";
import * as core from "../../core";

export class TestWebSocket implements core.IWebSocket {
    private events = new EventEmitter();

    public on(event: string, listener: (...args: any[]) => void) {
        this.events.on(event, listener);
    }

    public async join(id: string): Promise<void> {
        return Promise.resolve();
    }

    public send(event: string, ...args: any[]) {
        this.events.emit(event, ...args);
    }
}

export class TestWebSocketServer implements core.IWebSocketServer {
    private events = new EventEmitter();

    public on(event: string, listener: (...args: any[]) => void) {
        this.events.on(event, listener);
    }

    public async close(): Promise<void> {
        return Promise.resolve();
    }

    public createConnection(): TestWebSocket {
        const socket = new TestWebSocket();
        this.events.emit("connection", socket);
        return socket;
    }
}

export class TestHttpServer implements core.IHttpServer {
    private port: any;
    private listening = false;

    public async close(): Promise<void> {
        return Promise.resolve();
    }

    public listen(port: any) {
        this.port = port;
        this.listening = true;
    }

    public on(event: string, listener: (...args: any[]) => void) {
        // Fill me in
    }

    public address(): { port: number; family: string; address: string; } {
        return {
            address: "test",
            family: "test",
            port: this.port,
        };
    }
}

export class TestWebServer implements core.IWebServer {
    constructor(public httpServer: TestHttpServer, public webSocketServer: TestWebSocketServer) {
    }

    /**
     * Closes the web server
     */
    public async close(): Promise<void> {
        await Promise.all([this.httpServer.close(), this.webSocketServer.close()]);
    }
}

export class TestWebServerFactory implements core.IWebServerFactory {
    public create(requestListener: core.RequestListener): core.IWebServer {
        const testHttpServer = new TestHttpServer();
        const testWebSocketServer = new TestWebSocketServer();
        return new TestWebServer(testHttpServer, testWebSocketServer);
    }
}
