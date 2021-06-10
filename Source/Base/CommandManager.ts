import { Collection } from "discord.js";
import BaseCommand from "./BaseCommand";
import CodeFictionistClient from "./Client";

export default class CommandManager {
	public client: CodeFictionistClient;
	public cache: Collection<string, BaseCommand> = new Collection();
	public aliases: Collection<string, string> = new Collection();

	constructor(client: CodeFictionistClient) {
		this.client = client;
	}

	public register(name: string, input: BaseCommand | string) {
		if(typeof input === "string") this.aliases.set(name.toLowerCase(), input.toLowerCase());
		else if(input instanceof BaseCommand) this.cache.set(name.toLowerCase(), input);
		else throw new TypeError("Expected BaseCommand | string, received something else...");

		return true;
	}

	public get(name: string) {
		// @ts-ignore
		const command = this.cache.get(name.toLowerCase()) || this.cache.get(this.aliases.get(name.toLowerCase()));

		if(!command) return null;
		else return command;
	}
};