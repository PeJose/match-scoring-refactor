import { describe, test, expect } from "vitest";
import MatchParsers from "../src/strategy/MatchParsers";
import { MatchDTO, SPORTS } from "../src/types/match";

describe("MatchParsers Tests", () => {
	test("parse soccer match", () => {
		const mockedMatch: MatchDTO = {
			participant1: "Chelsea",
			participant2: "Arsenal",
			score: "2:1",
			sport: SPORTS.SOCCER,
		};

		expect(MatchParsers.soccer.formatScore(mockedMatch)).toBe("2:1");
		expect(MatchParsers.soccer.formatName(mockedMatch)).toBe(
			"Chelsea - Arsenal",
		);
	});

	test("parse basketball match", () => {
		const mockedMatch: MatchDTO = {
			participant1: "GKS Tychy",
			participant2: "GKS Katowice",
			score: [
				["9:7", "2:1"],
				["5:3", "9:9"],
			],
			sport: SPORTS.BASKETBALL,
		};

		expect(MatchParsers.basketball.formatScore(mockedMatch)).toBe(
			"9:7,2:1,5:3,9:9",
		);
		expect(MatchParsers.basketball.formatName(mockedMatch)).toBe(
			"GKS Tychy - GKS Katowice",
		);
	});

	test("parse volleyball match", () => {
		const mockedMatch: MatchDTO = {
			participant1: "Germany",
			participant2: "France",
			score: "3:0,25:23,25:19,25:21",
			sport: SPORTS.VOLLEYBALL,
		};

		// Zgodnie z app.js i readme_task.txt
		const expectedScore =
			"Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)";

		expect(MatchParsers.volleyball.formatScore(mockedMatch)).toBe(
			expectedScore,
		);
		expect(MatchParsers.volleyball.formatName(mockedMatch)).toBe(
			"Germany - France",
		);
	});

	test("parse tennis match", () => {
		const mockedMatch: MatchDTO = {
			participant1: "Maria Sharapova",
			participant2: "Serena Williams",
			score: "2:1,7:6,6:3,6:7",
			sport: SPORTS.TENNIS,
		};

		const expectedScore = "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)";

		expect(MatchParsers.tennis.formatScore(mockedMatch)).toBe(expectedScore);
		expect(MatchParsers.tennis.formatName(mockedMatch)).toBe(
			"Maria Sharapova vs Serena Williams",
		);
	});

	test("parse handball match", () => {
		const mockedMatch: MatchDTO = {
			participant1: "Pogoń Szczeciń",
			participant2: "Azoty Puławy",
			score: "34:26",
			sport: SPORTS.HANDBALL,
		};

		expect(MatchParsers.handball.formatScore(mockedMatch)).toBe("34:26");
		expect(MatchParsers.handball.formatName(mockedMatch)).toBe(
			"Pogoń Szczeciń vs Azoty Puławy",
		);
	});

	test("handle invalid sport (ski jumping)", () => {
		// @ts-expect-error "ski jumping" is not a member of SPORTS enum, so it will show correctly as an error.
		expect(MatchParsers["ski jumping"]).toBeUndefined();
	});
});
