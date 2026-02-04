export class InvalidScoreFormatError extends Error {
	constructor(expectedFormat: string) {
		super(`Invalid score format. Expected: ${expectedFormat}`);
		this.name = "InvalidScoreFormatError";
	}
}
