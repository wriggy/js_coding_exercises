const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns sum of all digits", () => {
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1009)).toBe(10);
    });
})

describe("createRange", () => {
    test('throws an error if invalid range', () => {
        expect(() => {
            createRange(4, 2);
        }).toThrow("invalid range");
        expect(() => {
            createRange(2, 5, -1);
        }).toThrow("invalid range");
    });

    test("returns array of numbers from start to end inclusive", () => {
        expect(createRange(2, 4)).toEqual([2, 3, 4]);
        expect(createRange(2, 2)).toEqual([2]);
    });

    test("returns array of numbers from start to end inclusive with interval = step", () => {
        expect(createRange(2, 7, 2)).toEqual([2, 4, 6]);
        expect(createRange(1, 9, 3)).toEqual([1, 4, 7]);
        expect(createRange(3, 1, -1)).toEqual([3, 2, 1]);
    })
});

describe("getScreentimeAlertlist", () => {

    const users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-05-02", usage: { mapMyRun: 91, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ];

    test("returns array of usernames of users with > 100 minutes of screentime on a date", () => {
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(['beth_1234']);
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(['beth_1234', 'sam_j_1989']);
    })
});

describe("hexToRGB", () => {
    test("returns RGB format", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#00FFCC")).toBe("rgb(0,255,204)");
    });
});

describe("findWinner", () => {
    const game1 = [["X", "X", "X"], ["0", null, "0"], ["X", null, "0"]];
    const game2 = [["X", "0", null], ["0", "0", "0"], ["X", null, "0"]];
    const game3 = [["X", "0", null], [null, null, "0"], ["X", "X", "X"]];
    const game4 = [["X", "0", null], ["X", "0", "0"], ["X", null, "X"]];
    const game5 = [["X", "0", "0"], ["X", "X", "0"], ["0", null, "0"]];
    const game6 = [["X", "0", null], [null, "X", "X"], ["0", null, "X"]];
    const game7 = [["X", "X", "0"], [null, "0", "X"], ["0", null, "0"]];
    const game8 = [["X", "0", null], ["X", null, "0"], [null, null, null]];
    const game9 = [["X", "0", "0"], [null, "X", "X"], ["0", null, "0"]];
    const game10 = [[null, null, null], [null, null, null], [null, null, null]];

    test("returns X or O for a line in a row", () => {
        expect(findWinner(game1)).toBe('X');
        expect(findWinner(game2)).toBe('0');
        expect(findWinner(game3)).toBe('X');
    })
    test("returns X or 0 for line in a column", () => {
        expect(findWinner(game4)).toBe('X');
        expect(findWinner(game5)).toBe('0');
    })
    test("returns X or 0 for line in diagonal", () => {
        expect(findWinner(game6)).toBe('X');
        expect(findWinner(game7)).toBe('0');
    })
    test("returns null if no lines of 3 Xs or 0s", () => {
        expect(findWinner(game8)).toBeNull();
        expect(findWinner(game9)).toBeNull();
        expect(findWinner(game10)).toBeNull();
    })
});