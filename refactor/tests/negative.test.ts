import { describe, test, expect } from "vitest";
import MatchService from "../src/services/MatchService";
import { SPORTS } from "../src/types/match";

describe("Negative Tests & Error Handling", () => {
	test("skips match with malformed tennis score without crashing", () => {
		const matches = [
			{
				sport: SPORTS.SOCCER,
				participant1: "Team A",
				participant2: "Team B",
				score: "2:1",
			},
			{
				sport: SPORTS.TENNIS,
				participant1: "Player 1",
				participant2: "Player 2",
				score: "Invalid Score String",
			},
			{
				sport: SPORTS.HANDBALL,
				participant1: "Team C",
				participant2: "Team D",
				score: "10:10",
			},
		];

		const service = new MatchService();
		const result = service.parseMatches(matches);

		expect(result).toHaveLength(2);
		expect(result[0].name).toContain("Team A");
		expect(result[1].name).toContain("Team C");
	});

	test("handles empty matches array gracefully", () => {
		const service = new MatchService();
		const result = service.parseMatches([]);
		expect(result).toEqual([]);
	});

	test("handles matches with missing parsers gracefully", () => {
		const service = new MatchService();
		expect(service.parseMatches([{ sport: "unknown_sport" } as any])).toEqual(
			[],
		);
	});
});
