import z from "zod";
import { MatchSchema } from "./schemas";

export * from "./schemas";

export type Match = z.infer<typeof MatchSchema>;
export type FormatName = (match: Match) => string;
export type FormatScore = (match: Match) => string;

export type MappedMatch = {
	name: string;
	score: string;
};
