//const { TestScheduler } = require("jest");
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe('sumMultiples', () => {
    test('throws an error if invalid argument', () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });

    test("returns sum of any numbers that are multiples of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
        expect(sumMultiples([12, 20, 0, 7])).toBe(32);
        expect(sumMultiples([0.4, 3, 5.0, -6])).toBe(2);
    });

    test("returns 0 if no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4])).toBe(0);
        expect(sumMultiples([])).toBe(0);
    });
});

describe('isValidDNA', () => {
    test("returns true if string only contains chars A C G and T", () => {
        expect(isValidDNA('TACGTTTA')).toBe(true);
        expect(isValidDNA('CCCCCC')).toBe(true);
    });
    test("returns false if string contains other chars", () => {
        expect(isValidDNA('TACGTTTAx')).toBe(false);
        expect(isValidDNA(' CCCCCC')).toBe(false);
        expect(isValidDNA("tacgta")).toBe(false);
    });
});


describe('getComplementaryDNA', () => {
    test("return DNA complements - replace T with A, A with T, G with C and C with G", () => {
        expect(getComplementaryDNA('T')).toBe('A');
        expect(getComplementaryDNA('A')).toBe('T');
        expect(getComplementaryDNA('C')).toBe('G');
        expect(getComplementaryDNA('G')).toBe('C');
        expect(getComplementaryDNA('TACG')).toBe('ATGC');
        expect(getComplementaryDNA('CCCCCC')).toBe('GGGGGG');
    });
});

describe('isItPrime', () => {
    test("returns false if <= 1", () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-1)).toBe(false);
    });

    test("returns true only if prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(35)).toBe(false);
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(8.4)).toBe(false);
        expect(isItPrime(13.0)).toBe(true);
    });
});

describe('createMatrix', () => {
    test('throws an error if argument n is not integer', () => {
        expect(() => {
            createMatrix(2.5, 'foo');
        }).toThrow("n must be an integer");
    });

    const strMatrix = [
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"]
    ];

    test('if fill is a string returns an nxn array of strings', () => {
        expect(createMatrix(3, 'foo')).toEqual(strMatrix);
        expect(createMatrix(1, 'foo')).toEqual([['foo']]);
    })

    const numMatrix = [
        [5, 5],
        [5, 5]
    ];

    test('if fill is a number returns an nxn array of numbers', () => {
        expect(createMatrix(2, 5)).toEqual(numMatrix);
        expect(createMatrix(0, 2)).toEqual([]);
    })

})

describe('areWeCovered', () => {
    test('returns false if no staff', () => {
        expect(areWeCovered([], 'Monday')).toBe(false);
        expect(areWeCovered([], 'Tuesday')).toBe(false);
        expect(areWeCovered([], 'Wednesday')).toBe(false);
        expect(areWeCovered([], 'Thursday')).toBe(false);
        expect(areWeCovered([], 'Friday')).toBe(false);
        expect(areWeCovered([], 'Saturday')).toBe(false);
        expect(areWeCovered([], 'Sunday')).toBe(false);
    });

    const staff = [
        { name: 'Anna', rota: ['Monday'] },
        { name: 'Beth', rota: ['Monday', 'Tuesday'] },
        { name: 'Jane', rota: ['Monday', 'Tuesday'] },
        { name: 'Sally', rota: ['Sunday', 'Tuesday'] },
        { name: 'Sue', rota: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }
    ];

    test('returns true if >=3 staff', () => {
        expect(areWeCovered(staff, 'Monday')).toBe(true);
        expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    });

    test('returns false if <3 staff', () => {
        expect(areWeCovered(staff, 'Thursday')).toBe(false);
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
    });

});
