import MatchParsers from "./src/strategy/MatchParsers";
import { MappedMatch, MatchSchema } from "./src/types";

const matches = [
	{
		sport: "soccer",
		participant1: "Chelsea",
		participant2: "Arsenal",
		score: "2:1",
	},
	{
		sport: "volleyball",
		participant1: "Germany",
		participant2: "France",
		score: "3:0,25:23,25:19,25:21",
	},
	{
		sport: "handball",
		participant1: "Pogoń Szczeciń",
		participant2: "Azoty Puławy",
		score: "34:26",
	},
	{
		sport: "basketball",
		participant1: "GKS Tychy",
		participant2: "GKS Katowice",
		score: [
			["9:7", "2:1"],
			["5:3", "9:9"],
		],
	},
	{
		sport: "tennis",
		participant1: "Maria Sharapova",
		participant2: "Serena Williams",
		score: "2:1,7:6,6:3,6:7",
	},
	{
		sport: "ski jumping",
	},
];

const mappedMatches: MappedMatch[] = [];

for (const rawMatch of matches) {
	const validation = MatchSchema.safeParse(rawMatch);
	if (!validation.success) {
		continue;
	}

	const match = validation.data;

	const parser = MatchParsers[match.sport];

	mappedMatches.push({
		name: parser.formatName(match),
		score: parser.formatScore(match),
	});
}

console.log(mappedMatches);
