import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Div, FastDiv } from '../../../src';

function doTest(Component, reps) {
    const startTime = performance.now();

    for (let i = 0; i < reps; i++) {
        ReactDOMServer.renderToString(
            <>
                {new Array(1000).fill().map(i => (
                    <Component key={i} />
                ))}
            </>,
        );
    }

    const endTime = performance.now();

    return endTime - startTime;
}

describe('speed', () => {
    it('goes fast', () => {
        // warmup
        doTest(FastDiv, 10);
        doTest(Div, 10);

        // actually do the tests for realsies
        const newSpeed = doTest(FastDiv, 10);
        const oldSpeed = doTest(Div, 10);

        console.log(`<Div />: ${oldSpeed}\n<FastDiv />: ${newSpeed}`);
    });
});
