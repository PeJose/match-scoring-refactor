export enum SPORTS {
	SOCCER = "soccer",
	VOLLEYBALL = "volleyball",
	HANDBALL = "handball",
	BASKETBALL = "basketball",
	TENNIS = "tennis",
}

export type MatchDTO = {
	sport: SPORTS;
	participant1: string;
	participant2: string;
	score: string | string[][];
};

export type FormatName = (match: MatchDTO) => string;
export type FormatScore = (match: MatchDTO) => string;

export type Match = {
	name: string;
	score: string;
};
