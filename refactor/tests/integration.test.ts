import { describe, test, expect } from "vitest";
import MatchService from "../src/services/MatchService";

describe("Integration Test - Legacy Compatibility", () => {
	test("processes raw matches array exactly like legacy app", () => {
		const rawMatches = [
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

		const expectedOutput = [
			{
				name: "Chelsea - Arsenal",
				score: "2:1",
			},
			{
				name: "Germany - France",
				score: "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)",
			},
			{
				name: "Pogoń Szczeciń vs Azoty Puławy",
				score: "34:26",
			},
			{
				name: "GKS Tychy - GKS Katowice",
				score: "9:7,2:1,5:3,9:9",
			},
			{
				name: "Maria Sharapova vs Serena Williams",
				score: "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)",
			},
		];

		const service = new MatchService();

		const validated = service.validateMatches(rawMatches);
		const parsed = service.parseMatches(validated);

		expect(parsed).toEqual(expectedOutput);
	});
});
