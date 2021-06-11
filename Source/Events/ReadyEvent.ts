import BaseEvent from "../Base/BaseEvent";
import CodeFictionistClient from "../Base/Client";

export default class ReadyEvent extends BaseEvent {
	constructor(client: CodeFictionistClient) {
		super("ready", client);
	}

	async run() {
		this.client.logger.success("client", `Logged in as ${this.client.user?.tag} successfully`);

		this.client.prefixes.push(`<@${this.client.user?.id}>`);
		this.client.prefixes.push(`<@!${this.client.user?.id}>`);
	}
};