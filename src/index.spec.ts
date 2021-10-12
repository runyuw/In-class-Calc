import {MyProject} from './index';
import {expect} from 'chai';

describe('MyProject', (): void => {

    describe('myMethod()', () => {

        it('should return "Hello, World!"', (): void => {
            expect(MyProject.myMethod('', 0)).to.equal('Hello, World!');
        });

    });

});
