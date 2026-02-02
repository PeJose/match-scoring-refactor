import { Match } from "../types";

const ScoreFormatter = {
	formatSetScore(match: Match) {
		const SetRegex =
			/([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/;

		if (!match.score || Array.isArray(match.score)) {
			throw new Error("Invalid match type");
		}
		const scores = SetRegex.exec(match.score);
		if (!scores || scores.length < 4) {
			throw new Error("Invalid score format");
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

	formatMultiArrayScore(match: Match) {
		if (!match.score || !Array.isArray(match.score)) {
			throw new Error("Invalid match type");
		}

		return match.score.flat().join(",");
	},

	formatPlainScore(match: Match) {
		if (!match.score || Array.isArray(match.score)) {
			throw new Error("Invalid match type");
		}

		return match.score;
	},
};

export default ScoreFormatter;
