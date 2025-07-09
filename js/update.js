// 통계 업데이트
    function updateStats() {
      document.getElementById('totalProblems').textContent = stats.total;
      document.getElementById('correctAnswers').textContent = stats.correct;
      
      const accuracy = stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0;
      document.getElementById('accuracyRate').textContent = `${accuracy}%`;
      
      const avgTime = stats.responses.length > 0 ? 
        (stats.totalTime / stats.responses.length).toFixed(1) : 0;
      document.getElementById('averageTime').textContent = `${avgTime}s`;
    }

    // 연속 정답 업데이트
    function updateStreak() {
      document.getElementById('streakIndicator').textContent = `🔥 연속 정답: ${currentStreak}`;
    }

    // 통계 초기화
    function resetStats() {
      if (confirm('통계를 초기화하시겠습니까?')) {
        stats = {
          total: 0,
          correct: 0,
          totalTime: 0,
          responses: []
        };
        currentStreak = 0;
        updateStats();
        updateStreak();
      }
    }