import { Match } from "../types";

const NameFormater = {
	getVsName(match: Match) {
		return `${match.participant1} vs ${match.participant2}`;
	},

	getDashName(match: Match) {
		return `${match.participant1} - ${match.participant2}`;
	},
};
export default NameFormater;
