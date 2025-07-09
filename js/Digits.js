// 자릿수 선택
function selectDigits(digits) {
    selectedDigits = parseInt(digits);
    document.querySelectorAll('.digit-btn').forEach(btn => {
    btn.classList.remove('active');
    });
    document.querySelector(`[data-digits="${digits}"]`).classList.add('active');
}