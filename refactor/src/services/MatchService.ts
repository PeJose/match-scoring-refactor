import { Match, MatchDTO } from "../types/match";
import MatchParsers from "../strategy/MatchParsers";

export default class MatchService {
	public validateMatches(matches: unknown[]): MatchDTO[] {
		const validatedMatches: MatchDTO[] = [];

		matches.forEach((match) => {
			if (this.isMatchDTO(match)) {
				validatedMatches.push(match);
			}
		});

		return validatedMatches;
	}

	private isMatchDTO(match: unknown): match is MatchDTO {
		if (typeof match !== "object" || match === null) {
			return false;
		}

		const m = match as Record<string, unknown>;

		if (typeof m.sport !== "string") return false;

		if (
			typeof m.participant1 !== "string" ||
			typeof m.participant2 !== "string"
		)
			return false;

		if (typeof m.score !== "string" && !Array.isArray(m.score)) return false;

		return true;
	}

	public parseMatches(matches: MatchDTO[]): Match[] {
		const parsedMatches: Match[] = [];

		for (const match of matches) {
			try {
				const parser = MatchParsers[match.sport];

				if (!parser) {
					continue;
				}

				parsedMatches.push({
					name: parser.formatName(match),
					score: parser.formatScore(match),
				});
			} catch (error) {
				continue;
			}
		}

		return parsedMatches;
	}
}
