const levels = [
	{
		id: 1,
		array: ['HTML', 'CSS'],
		task: "Add 'JavaScript' to the end of this array.",
		expectedOutput: ['HTML', 'CSS', 'JavaScript'],
		solution: (arr) => {
			arr.push('JavaScript');
			return arr;
		},
		hint: 'Try using a method that adds an element to the end of the array.',
	},
	{
		id: 2,
		array: ['JavaScript', 'Python', 'Ruby'],
		task: 'Remove the last element of the array.',
		expectedOutput: ['JavaScript', 'Python'],
		solution: (arr) => {
			arr.pop();
			return arr;
		},
		hint: 'Find a method that removes the last element of the array.',
	},
	{
		id: 3,
		array: ['a', 'b', 'c', 'd'],
		task: 'Add "e" at index 2.',
		expectedOutput: ['a', 'b', 'e', 'c', 'd'],
		solution: (arr) => {
			arr.splice(2, 0, 'e');
			return arr;
		},
		hint: 'Consider a method that can insert elements at a specific index.',
	},
	{
		id: 4,
		array: [10, 20, 30, 40],
		task: 'Remove the first element of the array.',
		expectedOutput: [20, 30, 40],
		solution: (arr) => {
			arr.shift();
			return arr;
		},
		hint: 'Look for a method that removes the first element of an array.',
	},
	{
		id: 5,
		array: [1, 2, 3, 4],
		task: 'Reverse the order of the array.',
		expectedOutput: [4, 3, 2, 1],
		solution: (arr) => {
			return arr.reverse();
		},
		hint: 'Think of a method that changes the order of elements in the array.',
	},
	{
		id: 6,
		array: [1, 2, 3],
		task: 'Fill the array with the number 0.',
		expectedOutput: [0, 0, 0],
		solution: (arr) => {
			return arr.fill(0);
		},
		hint: 'Think of a method that replaces all elements in the array with a specified value.',
	},
	{
		id: 7,
		array: ['x', 'y', 'z'],
		task: 'Sort the array in alphabetical order.',
		expectedOutput: ['x', 'y', 'z'],
		solution: (arr) => {
			return arr.sort();
		},
		hint: 'Find a method that arranges elements in a specified order.',
	},
];

let currentLevel = 0;
let score = 0;
let attempts = 0;
let failedAttempts = 0;
let startTime;

function startTimer() {
	startTime = Date.now();
}

function calculateScore() {
	const endTime = Date.now();
	const timeTaken = (endTime - startTime) / 1000;
	score += Math.max(100 - timeTaken - attempts * 10, 0);
	document.getElementById('result').textContent += ` Your score: ${score}`;
}

function displayLevel() {
	const level = levels[currentLevel];
	document.getElementById('task').textContent = level.task;
	document.getElementById(
		'array-display'
	).textContent = `Array: ${JSON.stringify(level.array)}`;
	document.getElementById('hint').textContent = '';
}

function updateScoreDisplay() {
	const scoreElement = document.getElementById('score-display');
	scoreElement.textContent = `Score: ${score}`;
}

function checkSolution() {
	const inputMethod = document.getElementById('input-method').value;
	let playerArray = [...levels[currentLevel].array];
	attempts++;

	try {
		eval(`playerArray.${inputMethod}`);
		const expected = JSON.stringify(levels[currentLevel].expectedOutput);
		const result = JSON.stringify(playerArray);

		if (result === expected) {
			showResult('Correct! Moving to next level...', 'correct');
			score += 100 - attempts * 10;
			failedAttempts = 0;
			currentLevel++;
			setTimeout(() => {
				if (currentLevel < levels.length) {
					resetGameUI();
					displayLevel();
				} else {
					showResult('Congratulations! You completed all levels!', 'correct');
				}
			}, 2000);
		} else {
			failedAttempts++;
			showResult(`Incorrect. Your result: ${result}`, 'incorrect');
			if (failedAttempts >= 1) {
				showHint();
			}
		}
	} catch (error) {
		failedAttempts++;
		showResult('Error in your method!', 'incorrect');
		if (failedAttempts >= 1) {
			showHint();
		}
	}
}

function showResult(message, type) {
	const resultDiv = document.getElementById('result');
	resultDiv.textContent = message;
	if (type === 'correct') {
		resultDiv.classList.remove('incorrect');
		resultDiv.classList.add('correct');
	} else {
		resultDiv.classList.remove('correct');
		resultDiv.classList.add('incorrect');
	}
}

function showHint() {
	const level = levels[currentLevel];
	const hintDiv = document.getElementById('hint');
	hintDiv.textContent = `Hint: ${level.hint}`;
}

function resetGameUI() {
	document.getElementById('input-method').value = '';
	document.getElementById('result').textContent = '';
	document.getElementById('result').classList.remove('correct', 'incorrect');
	document.getElementById('hint').textContent = '';
}

window.onload = function () {
	displayLevel();
	updateScoreDisplay();
};
