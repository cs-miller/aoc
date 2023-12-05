import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

export const computeCalibrationValue = (line: string): number => {
	let first = "";
	let last = "";
	for (const char of line) {
		if (digits.has(char)) {
			if (!first) first = char;
			last = char;
		}
	}

	return Number(`${first}${last}`);
};

function solve() {
	const file = createInterface({
		input: createReadStream(resolve(__dirname, "./input.txt")),
	});

	let total = 0;

	file.on("line", (line) => {
		const calibrationValue = computeCalibrationValue(line);
		total += calibrationValue;
	});

	file.on('close', () => {
		console.log(total)
	})

}

solve();
