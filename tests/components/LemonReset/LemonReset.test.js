import React from 'react';
import { render, shallow } from 'enzyme';
import * as LemonSrc from '../../../src';
import * as LemonES from '../../../es';
import * as LemonCommonJS from '../../../lib';
import * as LemonUMD from '../../../dist/lemon-reset';

function hasClass(wrapper, pattern) {
    const classes = wrapper.attr('class').split(/\s+/);
    const matching = classes.filter(cls => pattern.test(cls));
    return matching.length > 0;
}

describe.each([['umd', LemonUMD], ['commonjs', LemonCommonJS], ['es', LemonES], ['src', LemonSrc]])(
    'lemon-reset %s',
    (distribution, Lemon) => {
        it('renders the tag with correct styles', () => {
            const wrapper = render(<Lemon.Div className="test">ohai</Lemon.Div>);
            expect(hasClass(wrapper, /^lemon--div/)).toBe(true);
            expect(hasClass(wrapper, /^test$/)).toBe(true);
        });

        it('renders all tags with correct styles', () => {
            const allTags = [
                ['a', Lemon.A],
                ['abbr', Lemon.Abbr],
                ['acronym', Lemon.Acronym],
                ['address', Lemon.Address],
                ['applet', Lemon.Applet],
                ['article', Lemon.Article],
                ['aside', Lemon.Aside],
                ['audio', Lemon.Audio],
                ['b', Lemon.B],
                ['big', Lemon.Big],
                ['blockquote', Lemon.Blockquote],
                ['canvas', Lemon.Canvas],
                ['caption', Lemon.Caption],
                ['center', Lemon.Center],
                ['cite', Lemon.Cite],
                ['code', Lemon.Code],
                ['dd', Lemon.Dd],
                ['del', Lemon.Del],
                ['details', Lemon.Details],
                ['dfn', Lemon.Dfn],
                ['div', Lemon.Div],
                ['dl', Lemon.Dl],
                ['dt', Lemon.Dt],
                ['em', Lemon.Em],
                ['fieldset', Lemon.Fieldset],
                ['figcaption', Lemon.Figcaption],
                ['figure', Lemon.Figure],
                ['footer', Lemon.Footer],
                ['form', Lemon.Form],
                ['h1', Lemon.H1],
                ['h2', Lemon.H2],
                ['h3', Lemon.H3],
                ['h4', Lemon.H4],
                ['h5', Lemon.H5],
                ['h6', Lemon.H6],
                ['header', Lemon.Header],
                ['hgroup', Lemon.Hgroup],
                ['i', Lemon.I],
                ['iframe', Lemon.Iframe],
                ['ins', Lemon.Ins],
                ['kbd', Lemon.Kbd],
                ['label', Lemon.Label],
                ['legend', Lemon.Legend],
                ['li', Lemon.Li],
                ['mark', Lemon.Mark],
                ['menu', Lemon.Menu],
                ['nav', Lemon.Nav],
                ['object', Lemon.DomObject],
                ['ol', Lemon.Ol],
                ['output', Lemon.Output],
                ['p', Lemon.P],
                ['pre', Lemon.Pre],
                ['q', Lemon.Q],
                ['ruby', Lemon.Ruby],
                ['s', Lemon.S],
                ['samp', Lemon.Samp],
                ['section', Lemon.Section],
                ['small', Lemon.Small],
                ['span', Lemon.Span],
                ['strike', Lemon.Strike],
                ['strong', Lemon.Strong],
                ['sub', Lemon.Sub],
                ['summary', Lemon.Summary],
                ['sup', Lemon.Sup],
                ['td', Lemon.Td],
                ['th', Lemon.Th],
                ['time', Lemon.Time],
                ['tt', Lemon.Tt],
                ['u', Lemon.U],
                ['ul', Lemon.Ul],
                ['var', Lemon.Var],
                ['video', Lemon.Video],
            ];

            allTags.forEach(([tag, Component]) => {
                const wrapper = render(<Component className="test">ohai</Component>);
                expect(hasClass(wrapper, new RegExp(`^lemon--${tag}`))).toBe(true);
                expect(hasClass(wrapper, /^test$/)).toBe(true);
            });
        });

        it('renders elements without children', () => {
            let wrapper = render(<Lemon.Embed src="/example" />);
            expect(hasClass(wrapper, /^lemon--embed/)).toBe(true);
            wrapper = render(<Lemon.Img src="/example" />);
            expect(hasClass(wrapper, /^lemon--img/)).toBe(true);
            wrapper = render(<Lemon.Iframe src="/example" />);
            expect(hasClass(wrapper, /^lemon--iframe/)).toBe(true);
        });

        it('renders a table properly', () => {
            const wrapper = render(
                <Lemon.Table>
                    <Lemon.Thead>
                        <Lemon.Tr>
                            <Lemon.Th>wow</Lemon.Th>
                        </Lemon.Tr>
                    </Lemon.Thead>
                    <Lemon.Tbody>
                        <Lemon.Tr>
                            <Lemon.Td>wow</Lemon.Td>
                        </Lemon.Tr>
                    </Lemon.Tbody>
                    <Lemon.Tfoot>
                        <Lemon.Tr>
                            <Lemon.Td>wow</Lemon.Td>
                        </Lemon.Tr>
                    </Lemon.Tfoot>
                </Lemon.Table>,
            );
            expect(hasClass(wrapper, /^lemon--table/)).toBe(true);
        });

        it('renders the tag with additional props', () => {
            const wrapper = render(<Lemon.A href="/example">ohai</Lemon.A>);
            expect(hasClass(wrapper, /^lemon--a/)).toBe(true);
        });

        it('passes a snapshot test', () => {
            const wrapper = shallow(<Lemon.Div>ohai</Lemon.Div>);
            expect(wrapper).toMatchSnapshot();
        });
    },
);
