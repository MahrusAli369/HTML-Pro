// onblur
const blurInput = document.getElementById('blurInput');
const blurFeedback = document.getElementById('blurFeedback');
blurInput.addEventListener('blur', () => blurFeedback.textContent = 'Element lost focus!');

// onchange
const changeSelect = document.getElementById('changeSelect');
const changeFeedback = document.getElementById('changeFeedback');
changeSelect.addEventListener('change', () => changeFeedback.textContent = `Selected: ${changeSelect.value}`);

// oncontextmenu
const contextInput = document.getElementById('contextInput');
const contextFeedback = document.getElementById('contextFeedback');
contextInput.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextFeedback.textContent = 'Context menu triggered!';
});

// onfocus
const focusInput = document.getElementById('focusInput');
const focusFeedback = document.getElementById('focusFeedback');
focusInput.addEventListener('focus', () => focusFeedback.textContent = 'Element focused!');

// oninput
const inputEvent = document.getElementById('inputEvent');
const inputFeedback = document.getElementById('inputFeedback');
inputEvent.addEventListener('input', () => inputFeedback.textContent = `Current value: ${inputEvent.value}`);

// oninvalid
const invalidInput = document.getElementById('invalidInput');
const invalidFeedback = document.getElementById('invalidFeedback');
invalidInput.addEventListener('invalid', () => invalidFeedback.textContent = 'Invalid input detected!');

// onreset
const resetForm = document.getElementById('resetForm');
const resetFeedback = document.getElementById('resetFeedback');
resetForm.addEventListener('reset', () => resetFeedback.textContent = 'Form was reset!');

// onsearch
const searchInput = document.getElementById('searchInput');
const searchFeedback = document.getElementById('searchFeedback');
searchInput.addEventListener('search', () => searchFeedback.textContent = `Search triggered: ${searchInput.value}`);

// onselect
const selectInput = document.getElementById('selectInput');
const selectFeedback = document.getElementById('selectFeedback');
selectInput.addEventListener('select', () => selectFeedback.textContent = 'Text selected!');

// onsubmit
const submitForm = document.getElementById('submitForm');
const submitFeedback = document.getElementById('submitFeedback');
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitFeedback.textContent = 'Form submitted!';
});