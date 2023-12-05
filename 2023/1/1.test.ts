import { computeCalibrationValue } from "./1";

test.each`
	line             | expected
	${"1abc2"}       | ${12}
	${"pqr3stu8vwx"} | ${38}
	${"a1b2c3d4e5f"} | ${15}
	${"treb7uchet"}  | ${77}
`('returns $expected when called with $line', ({expected, line}) => {
	expect(computeCalibrationValue(line)).toBe(expected)
});
