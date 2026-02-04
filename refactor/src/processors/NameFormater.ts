import { MatchDTO } from "../types/match";

const NameFormater = {
	getVsName(match: MatchDTO) {
		return `${match.participant1} vs ${match.participant2}`;
	},

	getDashName(match: MatchDTO) {
		return `${match.participant1} - ${match.participant2}`;
	},
};
export default NameFormater;
