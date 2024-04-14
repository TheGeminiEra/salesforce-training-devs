import { createElement } from 'lwc';
import LWC05_SimpleMath from 'c/lWC05_SimpleMath';

describe('c-l-w-c-05-simple-math', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-w-c-05-simple-math', {
            is: LWC05_SimpleMath
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});