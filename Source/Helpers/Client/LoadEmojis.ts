import CodeFictionistClient from "../../Base/Client";

export function loadEmojis(client: CodeFictionistClient, emojis?: object) {
	if(!emojis) return;

	for(const entry of Object.entries(emojis)) {
		const emoji = client.emojis.cache.get(entry[1]);

		if(!emoji) throw new Error(`Emoji not found for name: ${entry[0]} and ID: ${entry[1]}`);

		// @ts-ignore
		client.emotes[entry[0]] = emoji;
	}
};