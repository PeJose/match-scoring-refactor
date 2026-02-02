import z from "zod";

enum SPORTS {
	SOCCER = "soccer",
	VOLLEYBALL = "volleyball",
	HANDBALL = "handball",
	BASKETBALL = "basketball",
	TENNIS = "tennis",
}

const MatchSchema = z.object({
	sport: z.enum(SPORTS),
	participant1: z.string(),
	participant2: z.string(),
	score: z.string().or(z.array(z.array(z.string()))),
});



export { SPORTS, MatchSchema };
