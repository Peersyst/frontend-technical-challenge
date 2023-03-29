import { Client } from "xrpl";
import {
    BaseRequest,
    BaseResponse,
} from "xrpl/dist/npm/models/methods/baseMethod";

const XRPL_WS = "wss://xrplcluster.com";

export default class XrplService {
    private static client = new Client(XRPL_WS);
    private static isConnected = false;

    private static request<R extends BaseRequest, T extends BaseResponse>(
        r: R
    ): Promise<T> {
        if (!this.isConnected)
            throw new Error(
                "[XrplService]: XrplService is websocket not connected. Call XrplService.connect() to connect it."
            );
        return this.client.request(r);
    }

    static async connect(): Promise<void> {
        if (this.isConnected) return;

        this.client = new Client(XRPL_WS);

        this.client.addListener("error", async () => {
            // Catch errors so app does not crash
            return undefined;
        });

        await this.client.connect();

        this.isConnected = true;
    }

    static async disconnect(): Promise<void> {
        if (!this.isConnected) return;
        await this.client.disconnect();
        this.isConnected = false;
    }

    static async reconnect(): Promise<void> {
        await this.disconnect();
        await this.connect();
    }
}
