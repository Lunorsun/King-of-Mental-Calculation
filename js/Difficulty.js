// 난이도 선택
    function selectDifficulty(difficulty) {
      selectedDifficulty = difficulty;
      document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
    }

    function getNumberRange(digits, difficulty) {
  const baseMin = Math.pow(10, digits - 1);      // 예: 100
  const baseMax = Math.pow(10, digits) - 1;      // 예: 999
  const rangeSize = baseMax - baseMin + 1;

  switch (difficulty) {
    case 'easy':
      // 자리수는 맞지만, 최소값 근처 작은 숫자
      return {
        min: baseMin,
        max: baseMin + Math.floor(rangeSize * 0.1) // 상위 10% 이내
      };
    case 'normal':
      // 중간대
      const midStart = baseMin + Math.floor(rangeSize * 0.4);
      return {
        min: midStart,
        max: midStart + Math.floor(rangeSize * 0.2)
      };
    case 'hard':
      // 높은 숫자대
      const highStart = baseMin + Math.floor(rangeSize * 0.8);
      return {
        min: highStart,
        max: baseMax
      };
    case 'expert':
    default:
      // 전체 범위
      return {
        min: baseMin,
        max: baseMax
      };
  }
}