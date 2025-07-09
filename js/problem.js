// 랜덤 숫자 생성
function generateRandomNumber(digits, difficulty) {
    const range = getNumberRange(digits, difficulty);
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

// 문제 생성
function generateProblem() {
    const operationType = document.getElementById('operationType').value;
    let operation;
    
    if (operationType === 'mixed') {
    const operations = ['add', 'subtract', 'multiply', 'divide'];
    operation = operations[Math.floor(Math.random() * operations.length)];
    } else {
    operation = operationType;
    }

    let num1, num2, answer, display;
    
    switch (operation) {
    case 'add':
        num1 = generateRandomNumber(selectedDigits, selectedDifficulty);
        num2 = generateRandomNumber(selectedDigits, selectedDifficulty);
        answer = num1 + num2;
        display = `${num1} + ${num2}`;
        break;
        
    case 'subtract':
        num1 = generateRandomNumber(selectedDigits, selectedDifficulty);
        num2 = generateRandomNumber(selectedDigits, selectedDifficulty);
        if (num1 < num2) [num1, num2] = [num2, num1]; // 음수 방지
        answer = num1 - num2;
        display = `${num1} - ${num2}`;
        break;
        
    case 'multiply':
        const smallerDigits = Math.max(1, selectedDigits - 1);
        num1 = generateRandomNumber(selectedDigits, selectedDifficulty);
        num2 = generateRandomNumber(smallerDigits, selectedDifficulty);
        answer = num1 * num2;
        display = `${num1} × ${num2}`;
        break;
        
    case 'divide':
        num2 = generateRandomNumber(Math.max(1, selectedDigits - 1), selectedDifficulty);
        answer = generateRandomNumber(selectedDigits, selectedDifficulty);
        num1 = num2 * answer;
        display = `${num1} ÷ ${num2}`;
        break;
    }

    return { display, answer };
}

// 연습 시작
function startPractice() {
    if (isRunning) return;
    
    isRunning = true;
    document.getElementById('answerInput').disabled = false;
    document.getElementById('answerInput').focus();
    
    nextProblem();
}

// 연습 중단
function stopPractice() {
    isRunning = false;
    clearTimeout(practiceTimer);
    clearInterval(countdownTimer);
    
    document.getElementById('problemDisplay').textContent = '시작 버튼을 눌러주세요';
    document.getElementById('answerInput').disabled = true;
    document.getElementById('answerInput').value = '';
    document.getElementById('resultDisplay').textContent = '';
    document.getElementById('timerText').textContent = '준비하세요';
    document.getElementById('timerFill').style.width = '100%';
}

// 다음 문제
function nextProblem() {
    if (!isRunning) return;
    
    const problem = generateProblem();
    currentProblem = problem.display;
    currentAnswer = problem.answer;
    
    document.getElementById('problemDisplay').textContent = currentProblem;
    document.getElementById('answerInput').value = '';
    document.getElementById('resultDisplay').textContent = '';
    document.getElementById('answerInput').focus();
    
    startTimer();
}


// 답안 체크
    function checkAnswer() {
      const userAnswer = parseInt(document.getElementById('answerInput').value);
      const resultDisplay = document.getElementById('resultDisplay');
      
      if (isNaN(userAnswer)) return;
      
      clearInterval(countdownTimer);
      clearTimeout(practiceTimer);
      
      const timeLimit = parseFloat(document.getElementById('timeInterval').value);
      const timerFill = document.getElementById('timerFill');
      const remainingPercentage = parseFloat(timerFill.style.width);
      const timeUsed = timeLimit * (1 - remainingPercentage / 100);
      
      stats.total++;
      stats.totalTime += timeUsed;
      stats.responses.push({ time: timeUsed, correct: userAnswer === currentAnswer });
      
      if (userAnswer === currentAnswer) {
        resultDisplay.textContent = '정답입니다! 🎉';
        resultDisplay.className = 'result-display correct';
        stats.correct++;
        currentStreak++;
      } else {
        resultDisplay.textContent = `오답! 정답: ${currentAnswer}`;
        resultDisplay.className = 'result-display incorrect';
        currentStreak = 0;
      }
      
      updateStats();
      updateStreak();
      
      practiceTimer = setTimeout(() => {
        nextProblem();
      }, 1500);
    }