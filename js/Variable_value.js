  // 전역 변수
let currentProblem = null;         // 현재 문제
let currentAnswer = null;          // 현재 정답

let practiceTimer = null;          // 연습 타이머 ID
let countdownTimer = null;         // 카운트다운 타이머 ID

let isRunning = false;             // 연습 진행 상태

let selectedDigits = 2;            // 선택한 자릿수
let selectedDifficulty = 'normal'; // 선택한 난이도

let currentStreak = 0;             // 연속 정답 수


// 통계 변수
let stats = {
  total: 0,
  correct: 0,
  totalTime: 0,
  responses: []
};