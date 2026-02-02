import NameFormater from "../processors/NameFormater";
import { SPORTS } from "../types/schemas";
import ScoreFormatter from "../processors/ScoreFormater";
import { FormatName, FormatScore } from "../types";

const MatchParsers: Record<
	SPORTS,
	{ formatName: FormatName; formatScore: FormatScore }
> = {
	soccer: {
		formatName: NameFormater.getDashName,
		formatScore: ScoreFormatter.formatPlainScore,
	},
	tennis: {
		formatName: NameFormater.getVsName,
		formatScore: ScoreFormatter.formatSetScore,
	},
	volleyball: {
		formatName: NameFormater.getVsName,
		formatScore: ScoreFormatter.formatSetScore,
	},
	handball: {
		formatName: NameFormater.getDashName,
		formatScore: ScoreFormatter.formatPlainScore,
	},
	basketball: {
		formatName: NameFormater.getDashName,
		formatScore: ScoreFormatter.formatMultiArrayScore,
	},
};

export default MatchParsers;
