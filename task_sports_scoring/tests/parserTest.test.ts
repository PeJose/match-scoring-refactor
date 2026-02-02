import MatchParsers from "../src/strategy/MatchParsers";
import { expect, test } from "vitest";
import { Match, SPORTS } from "../src/types";

test("parse soccer match", () => {
	const match: Match = {
		participant1: "123",
		participant2: "456",
		score: "1:1",
		sport: SPORTS.SOCCER,
	};

	expect(MatchParsers.soccer.formatScore(match)).toBe("1:1");
	expect(MatchParsers.soccer.formatName(match)).toBe("123 - 456");
});

test("parse basketball match", () => {
	const match: Match = {
		participant1: "123",
		participant2: "456",
		score: [
			["1:1", "2:1"],
			["2:3", "4:1"],
		],
		sport: SPORTS.BASKETBALL,
	};

	expect(MatchParsers.basketball.formatScore(match)).toBe("1:1,2:1,2:3,4:1");
	expect(MatchParsers.soccer.formatName(match)).toBe("123 - 456");
});

test("parse volleyball match", () => {
	const match: Match = {
		participant1: "123",
		participant2: "456",
		score: [
			["1:1", "2:1"],
			["2:3", "4:1"],
		],
		sport: SPORTS.VOLLEYBALL,
	};

	expect(MatchParsers.volleyball.formatScore(match)).toBe("1:1,2:1,2:3,4:1");
});
