// Calculate Mean
const mean = (arr) => arr.reduce((acc, next) => acc + next, 0) / arr.length

// Calculate Median
const median = (arr) => {
	const midNum = Math.floor(arr.length / 2)
	arr.sort((a, b) => a - b)
	if (arr.length % 2) {
		return arr(midNum)
	} else {
		return (arr[midNum - 1] + arr[midNum]) / 2
	}
}

// Calculate Mode
const mode = (arr) => {
	let count = {}
	let maxCount = 0
	let num
	for (let i = 0; i < arr.length; i++) {
		if (!count[arr[i]]) {
			count[arr[i]] = 0
		}
		count[arr[i]]++
	}
	for (num in count) {
		if (count[num] > maxCount) {
			maxCount = num
		}
	}
	return maxCount
}

module.exports = { mean, median, mode }
