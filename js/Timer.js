// 타이머 시작
    function startTimer() {
      const timeLimit = parseFloat(document.getElementById('timeInterval').value) * 1000;
      const startTime = Date.now();
      
      document.getElementById('timerText').textContent = `${(timeLimit / 1000).toFixed(1)}초`;
      
      countdownTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, timeLimit - elapsed);
        const percentage = (remaining / timeLimit) * 100;
        
        document.getElementById('timerFill').style.width = `${percentage}%`;
        document.getElementById('timerText').textContent = `${(remaining / 1000).toFixed(1)}초`;
        
        if (remaining <= 0) {
          clearInterval(countdownTimer);
          handleTimeout();
        }
      }, 100);
    }

    // 시간 초과 처리
    function handleTimeout() {
      const resultDisplay = document.getElementById('resultDisplay');
      resultDisplay.textContent = `시간 초과! 정답: ${currentAnswer}`;
      resultDisplay.className = 'result-display incorrect';
      
      stats.total++;
      stats.responses.push({ time: parseFloat(document.getElementById('timeInterval').value), correct: false });
      currentStreak = 0;
      
      updateStats();
      updateStreak();
      
      practiceTimer = setTimeout(() => {
        nextProblem();
      }, 1500);
    }