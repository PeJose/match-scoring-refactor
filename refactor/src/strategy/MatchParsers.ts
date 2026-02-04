import NameFormater from "../processors/NameFormater";
import ScoreFormatter from "../processors/ScoreFormater";
import { SPORTS } from "../types/match";
import { FormatName, FormatScore } from "../types/match";

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
		formatName: NameFormater.getDashName,
		formatScore: ScoreFormatter.formatSetScore,
	},
	handball: {
		formatName: NameFormater.getVsName,
		formatScore: ScoreFormatter.formatPlainScore,
	},
	basketball: {
		formatName: NameFormater.getDashName,
		formatScore: ScoreFormatter.formatMatrixScore,
	},
};

export default MatchParsers;
