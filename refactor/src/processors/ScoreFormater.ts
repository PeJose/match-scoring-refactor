import { MatchDTO } from "../types/match";
import { InvalidScoreFormatError } from "../errors/match";

const ScoreFormatter = {
	formatSetScore(match: MatchDTO) {
		const SetRegex =
			/([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/;

		if (!match.score || Array.isArray(match.score)) {
			throw new InvalidScoreFormatError(
				"string (e.g. '3:0,25:23,25:19,25:21')",
			);
		}
		const scores = SetRegex.exec(match.score);
		if (!scores || scores.length < 4) {
			throw new InvalidScoreFormatError(
				"string matching pattern 'main,set1,set2,set3'",
			);
		}

		const [, mainmatch, set1, set2, set3] = scores;

		return (
			"Main score: " +
			mainmatch +
			" (" +
			"set1 " +
			set1 +
			", " +
			"set2 " +
			set2 +
			", " +
			"set3 " +
			set3 +
			")"
		);
	},

	formatMatrixScore(match: MatchDTO) {
		if (!match.score || !Array.isArray(match.score)) {
			throw new InvalidScoreFormatError("matrix (array of arrays)");
		}

		return match.score.reduce((acc, val) => acc.concat(val), []).join(",");
	},

	formatPlainScore(match: MatchDTO) {
		if (!match.score || Array.isArray(match.score)) {
			throw new InvalidScoreFormatError("simple string (e.g. '2:1')");
		}

		return match.score;
	},
};

export default ScoreFormatter;
