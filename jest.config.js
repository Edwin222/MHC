
module.exports = {
    roots: [
        "<rootDir>/src/Tests"
    ],
    transform: {
        "^.+\.ts$": "ts-jest"
    },
    testRegex: '^.+\.test\.ts$',
    moduleFileExtensions: ['ts', 'json', 'js'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    }
}