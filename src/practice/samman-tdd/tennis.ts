type CurrentScore = {
  A: number;
  B: number;
};

type SimpleScores = { [key: number]: string };

const simpleScores: SimpleScores = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty',
};

export function getTennisSpecificScores({ A, B }: CurrentScore) {
  const isComplexScore = A >= 3 && B >= 3;

  if (A === 4 && B <= 2) {
    return 'Player A wins';
  }

  if (B === 4 && A <= 2) {
    return 'Player B wins';
  }

  if (!isComplexScore) {
    return `${simpleScores[A]} - ${simpleScores[B]}`;
  }

  return A === B
    ? 'Deuce'
    : A > B
      ? A - B === 1
        ? 'Advantage player A'
        : 'Player A wins'
      : B - A === 1
        ? 'Advantage player B'
        : 'Player B wins';
}

export function getMatchScores(scorecard: Array<'A' | 'B'>) {
  const currentScore = {
    A: 0,
    B: 0,
  };
  const match = [];

  scorecard.forEach((each) => {
    match.push(getTennisSpecificScores(currentScore));
    currentScore[each] += 1;
  });
  match.push(getTennisSpecificScores(currentScore));

  return match;
}
