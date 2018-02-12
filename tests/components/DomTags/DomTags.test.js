import React from 'react';
import { render, shallow } from 'enzyme';
import * as DomTags from '../../../src';

describe('DomTags', () => {
    it('renders the tag with correct styles', () => {
        const wrapper = render(<DomTags.Div className="test">ohai</DomTags.Div>);
        expect(wrapper.hasClass('domtags--div')).toBe(true);
        expect(wrapper.hasClass('test')).toBe(true);
    });

    it('renders all tags with correct styles', () => {
        const allTags = [
            ['a', DomTags.A],
            ['abbr', DomTags.Abbr],
            ['acronym', DomTags.Acronym],
            ['address', DomTags.Address],
            ['applet', DomTags.Applet],
            ['article', DomTags.Article],
            ['aside', DomTags.Aside],
            ['audio', DomTags.Audio],
            ['b', DomTags.B],
            ['big', DomTags.Big],
            ['blockquote', DomTags.Blockquote],
            ['canvas', DomTags.Canvas],
            ['caption', DomTags.Caption],
            ['center', DomTags.Center],
            ['cite', DomTags.Cite],
            ['code', DomTags.Code],
            ['dd', DomTags.Dd],
            ['del', DomTags.Del],
            ['details', DomTags.Details],
            ['dfn', DomTags.Dfn],
            ['div', DomTags.Div],
            ['dl', DomTags.Dl],
            ['dt', DomTags.Dt],
            ['em', DomTags.Em],
            ['fieldset', DomTags.Fieldset],
            ['figcaption', DomTags.Figcaption],
            ['figure', DomTags.Figure],
            ['footer', DomTags.Footer],
            ['form', DomTags.Form],
            ['h1', DomTags.H1],
            ['h2', DomTags.H2],
            ['h3', DomTags.H3],
            ['h4', DomTags.H4],
            ['h5', DomTags.H5],
            ['h6', DomTags.H6],
            ['header', DomTags.Header],
            ['hgroup', DomTags.Hgroup],
            ['i', DomTags.I],
            ['iframe', DomTags.Iframe],
            ['ins', DomTags.Ins],
            ['kbd', DomTags.Kbd],
            ['label', DomTags.Label],
            ['legend', DomTags.Legend],
            ['li', DomTags.Li],
            ['mark', DomTags.Mark],
            ['menu', DomTags.Menu],
            ['nav', DomTags.Nav],
            ['object', DomTags.DomObject],
            ['ol', DomTags.Ol],
            ['output', DomTags.Output],
            ['p', DomTags.P],
            ['pre', DomTags.Pre],
            ['q', DomTags.Q],
            ['ruby', DomTags.Ruby],
            ['s', DomTags.S],
            ['samp', DomTags.Samp],
            ['section', DomTags.Section],
            ['small', DomTags.Small],
            ['span', DomTags.Span],
            ['strike', DomTags.Strike],
            ['strong', DomTags.Strong],
            ['sub', DomTags.Sub],
            ['summary', DomTags.Summary],
            ['sup', DomTags.Sup],
            ['td', DomTags.Td],
            ['th', DomTags.Th],
            ['time', DomTags.Time],
            ['tt', DomTags.Tt],
            ['u', DomTags.U],
            ['ul', DomTags.Ul],
            ['var', DomTags.Var],
            ['video', DomTags.Video],
        ];

        allTags.forEach(([tag, Component]) => {
            const wrapper = render(<Component className="test">ohai</Component>);
            expect(wrapper.hasClass(`domtags--${tag}`)).toBe(true);
            expect(wrapper.hasClass('test')).toBe(true);
        });
    });

    it('renders elements without children', () => {
        let wrapper = render(<DomTags.Embed src="/example" />);
        expect(wrapper.hasClass('domtags--embed')).toBe(true);
        wrapper = render(<DomTags.Img src="/example" />);
        expect(wrapper.hasClass('domtags--img')).toBe(true);
        wrapper = render(<DomTags.Iframe src="/example" />);
        expect(wrapper.hasClass('domtags--iframe')).toBe(true);
    });

    it('renders a table properly', () => {
        const wrapper = render(
            <DomTags.Table>
                <DomTags.Thead>
                    <DomTags.Tr>
                        <DomTags.Th>wow</DomTags.Th>
                    </DomTags.Tr>
                </DomTags.Thead>
                <DomTags.Tbody>
                    <DomTags.Tr>
                        <DomTags.Td>wow</DomTags.Td>
                    </DomTags.Tr>
                </DomTags.Tbody>
                <DomTags.Tfoot>
                    <DomTags.Tr>
                        <DomTags.Td>wow</DomTags.Td>
                    </DomTags.Tr>
                </DomTags.Tfoot>
            </DomTags.Table>,
        );
        expect(wrapper.hasClass('domtags--table')).toBe(true);
    });

    it('renders the tag with additional props', () => {
        const wrapper = render(<DomTags.A href="/example">ohai</DomTags.A>);
        expect(wrapper.hasClass('domtags--a')).toBe(true);
    });

    it('passes a snapshot test', () => {
        const wrapper = shallow(<DomTags.Div>ohai</DomTags.Div>);
        expect(wrapper).toMatchSnapshot();
    });
});
