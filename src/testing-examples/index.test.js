//testing index.js

//npx mocha "src/**/*.test.js" --recursive --require @babel/register
//this asks mocha to run our tests, recursively searching thru our file tree to run all files that end in .test.js
//or npm run test bc we put it in our package.json as a script

import { expect } from 'chai';
import { getPropertyWithDefault } from './index'; //function from index.js

describe('getPropertyWithDefault - basic functionality', () => {
    it('returns the correct value when property exists', () => {
        const person = { name: 'John Doe', age: 30, hairColor: 'brown' };
        const actual = getPropertyWithDefault(
            'name',
            'N/A',
            person,
        );
        const expected = 'John Doe';
        expect(actual).to.equal(expected);
    });

    it('returns the default value when the property does not exist', () => {
        const person = {};//empty object
        const actual = getPropertyWithDefault(
            'name',
            'N/A',
            person,
        );
        const expected = 'N/A';
        expect(actual).to.equal(expected);
    });
});

