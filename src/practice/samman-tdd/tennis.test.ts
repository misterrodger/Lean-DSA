import { getMatchScores, getTennisSpecificScores } from './tennis';

// Tennis kata

// DONE: simple scoring: 0 = Love, 1 = Fifteen, 2 = Thirty, 3 = Forty
// DONE: If each have 3 or more, and have the same points, score = "Deuce"
// DONE: If each have 3 or more and one player is up by one, the score is "Advantage player X"
// DOnE: A player wins by having at least 4 points AND having 2 more than the opponent

describe('Tennis kata', () => {
  describe('getTennisSpecificScores', () => {
    it.each([
      // AC 1
      ['simpleScoring', 0, 1, 'Love - Fifteen'],
      ['simpleScoring', 1, 2, 'Fifteen - Thirty'],
      ['simpleScoring', 2, 3, 'Thirty - Forty'],
      ['simpleScoring', 0, 0, 'Love - Love'],
      ['simpleScoring', 1, 1, 'Fifteen - Fifteen'],
      ['simpleScoring', 2, 2, 'Thirty - Thirty'],
      // AC 2
      ['Deuce', 3, 3, 'Deuce'],
      ['Deuce', 4, 4, 'Deuce'],
      ['Deuce', 5, 5, 'Deuce'],
      ['Deuce', 6, 6, 'Deuce'],
      // AC 3
      ['Advantage player A', 4, 3, 'Advantage player A'],
      ['Advantage player B', 3, 4, 'Advantage player B'],
      // AC 4
      ['Player A wins', 5, 3, 'Player A wins'],
      ['Player B wins', 3, 5, 'Player B wins'],
      ['Player A wins', 4, 2, 'Player A wins'],
      ['Player B wins', 2, 4, 'Player B wins'],
      ['Player A wins', 6, 4, 'Player A wins'],
      ['Player B wins', 4, 6, 'Player B wins'],

      ['Player A wins', 4, 1, 'Player A wins'],
      ['Player B wins', 1, 4, 'Player B wins'],
      ['Player A wins', 4, 2, 'Player A wins'],
      ['Player B wins', 2, 4, 'Player B wins'],
    ])('%p', (_, A, B, expected) => {
      const result = getTennisSpecificScores({ A, B });

      expect(result).toEqual(expected);
    });
  });

  describe('getMatchScores', () => {
    it('should return match scores as expected', () => {
      const result = getMatchScores(['A', 'B', 'A', 'A', 'A']);

      expect(result).toMatchInlineSnapshot(`
[
  "Love - Love",
  "Fifteen - Love",
  "Fifteen - Fifteen",
  "Thirty - Fifteen",
  "Forty - Fifteen",
  "Player A wins",
]
`);
    });
  });
});
