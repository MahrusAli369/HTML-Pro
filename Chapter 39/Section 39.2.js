// onkeydown demo
const keydownInput = document.getElementById('keydownInput');
const keydownFeedback = document.getElementById('keydownFeedback');
keydownInput.addEventListener('keydown', function (event) {
    keydownFeedback.textContent = `Key Down: ${event.key} (Code: ${event.code})`;
});

// onkeypress demo
const keypressInput = document.getElementById('keypressInput');
const keypressFeedback = document.getElementById('keypressFeedback');
keypressInput.addEventListener('keypress', function (event) {
    keypressFeedback.textContent = `Key Pressed: ${event.key} (Code: ${event.code})`;
});

// onkeyup demo
const keyupInput = document.getElementById('keyupInput');
const keyupFeedback = document.getElementById('keyupFeedback');
keyupInput.addEventListener('keyup', function (event) {
    keyupFeedback.textContent = `Key Released: ${event.key} (Code: ${event.code})`;
});