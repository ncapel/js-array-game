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
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 4,
	// 	array: [10, 20, 30, 40],
	// 	task: 'Find the index of the number 30.',
	// 	expectedOutput: 2,
	// 	solution: (arr) => {
	// 		return arr.indexOf(30);
	// 	},
	// 	hint: 'Look for a method that finds the position of an element.',
	// },
	{
		id: 5,
		array: [10, 20, 30, 40],
		task: 'Remove the first element of the array.',
		expectedOutput: [20, 30, 40],
		solution: (arr) => {
			arr.shift();
			return arr;
		},
		hint: 'Look for a method that removes the first element of an array.',
	},
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 6,
	// 	array: ['apple', 'banana', 'cherry'],
	// 	task: 'Check if the array includes "banana".',
	// 	expectedOutput: true,
	// 	solution: (arr) => {
	// 		return arr.includes('banana');
	// 	},
	// 	hint: 'Find a method that determines if an array contains a specific value.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 7,
	// 	array: [5, 10, 15],
	// 	task: 'Combine the array into a string with commas.',
	// 	expectedOutput: '5,10,15',
	// 	solution: (arr) => {
	// 		return arr.join(',');
	// 	},
	// 	hint: 'Use a method that converts the array elements into a string with a separator.',
	// },
	{
		id: 8,
		array: [1, 2, 3, 4],
		task: 'Reverse the order of the array.',
		expectedOutput: [4, 3, 2, 1],
		solution: (arr) => {
			return arr.reverse();
		},
		hint: 'Think of a method that changes the order of elements in the array.',
	},
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 9,
	// 	array: [1, 2, 3, 4],
	// 	task: 'Get a new array with the first two elements.',
	// 	expectedOutput: [1, 2],
	// 	solution: (arr) => {
	// 		return arr.slice(0, 2);
	// 	},
	// 	hint: 'Look for a method that extracts a portion of the array.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 10,
	// 	array: [1, 2, 3, 4, 5, 6, 7],
	// 	task: 'Filter out all odd numbers.',
	// 	expectedOutput: [2, 4, 6],
	// 	solution: (arr) => {
	// 		return arr.filter((num) => num % 2 === 0);
	// 	},
	// 	hint: 'You might need a method that filters elements based on a condition.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 11,
	// 	array: [3, 6, 9],
	// 	task: 'Find the maximum number in the array.',
	// 	expectedOutput: 9,
	// 	solution: (arr) => {
	// 		return Math.max(...arr);
	// 	},
	// 	hint: 'You might need to use a method to find the largest number.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 12,
	// 	array: [10, 20, 30, 40],
	// 	task: 'Reduce the array to the sum of its elements.',
	// 	expectedOutput: 100,
	// 	solution: (arr) => {
	// 		return arr.reduce((acc, curr) => acc + curr, 0);
	// 	},
	// 	hint: 'Consider a method that accumulates all values into a single result.',
	// },
	{
		id: 13,
		array: [1, 2, 3, 4, 5],
		task: 'Remove elements greater than 3.',
		expectedOutput: [1, 2, 3],
		solution: (arr) => {
			return arr.filter((num) => num <= 3);
		},
		hint: 'Use a method to filter elements based on a condition.',
	},
	{
		id: 14,
		array: [1, 2, 3],
		task: 'Fill the array with the number 0.',
		expectedOutput: [0, 0, 0],
		solution: (arr) => {
			return arr.fill(0);
		},
		hint: 'Think of a method that replaces all elements in the array with a specified value.',
	},
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 15,
	// 	array: [1, 2, 3, 4],
	// 	task: 'Double each value in the array.',
	// 	expectedOutput: [2, 4, 6, 8],
	// 	solution: (arr) => {
	// 		return arr.map((num) => num * 2);
	// 	},
	// 	hint: 'Think of a method that transforms each element of the array.',
	// },
	{
		id: 16,
		array: ['x', 'y', 'z'],
		task: 'Sort the array in alphabetical order.',
		expectedOutput: ['x', 'y', 'z'],
		solution: (arr) => {
			return arr.sort();
		},
		hint: 'Find a method that arranges elements in a specified order.',
	},
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 17,
	// 	array: [5, 10, 15],
	// 	task: 'Find the average of the numbers in the array.',
	// 	expectedOutput: 10,
	// 	solution: (arr) => {
	// 		return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
	// 	},
	// 	hint: 'Use a method to find the average value of elements in the array.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 18,
	// 	array: ['a', 'b', 'c'],
	// 	task: 'Convert all elements to uppercase.',
	// 	expectedOutput: ['A', 'B', 'C'],
	// 	solution: (arr) => {
	// 		return arr.map((item) => item.toUpperCase());
	// 	},
	// 	hint: 'Consider a method that transforms each element into uppercase.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 19,
	// 	array: [10, 20, 30, 40],
	// 	task: 'Find the first element that is greater than 25.',
	// 	expectedOutput: 30,
	// 	solution: (arr) => {
	// 		return arr.find((num) => num > 25);
	// 	},
	// 	hint: 'Look for a method that returns the first element satisfying a condition.',
	// },
	// ! BROKEN, TRYING TO WORK ON A FIX
	// {
	// 	id: 20,
	// 	array: [1, 2, 3, 4, 5],
	// 	task: 'Check if every element is greater than 0.',
	// 	expectedOutput: true,
	// 	solution: (arr) => {
	// 		return arr.every((num) => num > 0);
	// 	},
	// 	hint: 'Use a method to test if all elements meet a certain condition.',
	// },
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
			failedAttempts = 0; // Reset failed attempts on a correct solution
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
