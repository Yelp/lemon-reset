// @flow

import * as React from 'react';
import styles from './LemonReset.css';

type LemonResetType =
    | 'a'
    | 'abbr'
    | 'acronym'
    | 'address'
    | 'applet'
    | 'article'
    | 'aside'
    | 'audio'
    | 'b'
    | 'big'
    | 'blockquote'
    | 'body'
    | 'canvas'
    | 'caption'
    | 'center'
    | 'cite'
    | 'code'
    | 'dd'
    | 'del'
    | 'details'
    | 'dfn'
    | 'div'
    | 'dl'
    | 'dt'
    | 'em'
    | 'embed'
    | 'fieldset'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'form'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'header'
    | 'hgroup'
    | 'html'
    | 'i'
    | 'iframe'
    | 'img'
    | 'ins'
    | 'kbd'
    | 'label'
    | 'legend'
    | 'li'
    | 'mark'
    | 'menu'
    | 'nav'
    | 'object'
    | 'ol'
    | 'output'
    | 'p'
    | 'pre'
    | 'q'
    | 'ruby'
    | 's'
    | 'samp'
    | 'section'
    | 'small'
    | 'span'
    | 'strike'
    | 'strong'
    | 'sub'
    | 'summary'
    | 'sup'
    | 'table'
    | 'tbody'
    | 'td'
    | 'tfoot'
    | 'th'
    | 'thead'
    | 'time'
    | 'tr'
    | 'tt'
    | 'u'
    | 'ul'
    | 'var'
    | 'video';

type Props<T> = {
    tag: T,
    children?: React.Node,
    className?: string,
    tagRef?: ?React.Ref<T>,
};

export function LemonReset<T: string & LemonResetType>({
    tag: Tag,
    children = null,
    className = '',
    tagRef = null,
    ...otherProps
}: Props<T>) {
    let classes = styles[`lemon--${Tag}`];
    if (className != null && className !== '') {
        classes += ` ${className}`;
    }
    return (
        <Tag className={classes} ref={tagRef} {...otherProps}>
            {children}
        </Tag>
    );
}

LemonReset.displayName = 'LemonReset';

type TagProps = {
    children?: React.Node,
    className?: string,
};

type NoChildTagProps = {
    className?: string,
};

function createTagComponent(tag: LemonResetType, displayName: string) {
    const component = ({ className = '', ...otherProps }: TagProps) => (
        <LemonReset tag={tag} className={className} {...otherProps} />
    );
    component.displayName = displayName;
    return component;
}

function createNoChildTagComponent(tag: LemonResetType, displayName: string) {
    const component = ({ children = null, className = '', ...otherProps }: NoChildTagProps) => (
        <LemonReset tag={tag} className={className} {...otherProps}>
            {children}
        </LemonReset>
    );
    component.displayName = displayName;
    return component;
}

export const Embed = createNoChildTagComponent('embed', 'Embed');
export const Img = createNoChildTagComponent('img', 'Img');

export const A = createTagComponent('a', 'A');
export const Abbr = createTagComponent('abbr', 'Abbr');
export const Acronym = createTagComponent('acronym', 'Acronym');
export const Address = createTagComponent('address', 'Address');
export const Applet = createTagComponent('applet', 'Applet');
export const Article = createTagComponent('article', 'Article');
export const Aside = createTagComponent('aside', 'Aside');
export const Audio = createTagComponent('audio', 'Audio');
export const B = createTagComponent('b', 'B');
export const Big = createTagComponent('big', 'Big');
export const Blockquote = createTagComponent('blockquote', 'Blockquote');
export const Canvas = createTagComponent('canvas', 'Canvas');
export const Caption = createTagComponent('caption', 'Caption');
export const Center = createTagComponent('center', 'Center');
export const Cite = createTagComponent('cite', 'Cite');
export const Code = createTagComponent('code', 'Code');
export const Dd = createTagComponent('dd', 'Dd');
export const Del = createTagComponent('del', 'Del');
export const Details = createTagComponent('details', 'Details');
export const Dfn = createTagComponent('dfn', 'Dfn');
export const Div = createTagComponent('div', 'Div');
export const Dl = createTagComponent('dl', 'Dl');
export const DomObject = createTagComponent('object', 'DomObject');
export const Dt = createTagComponent('dt', 'Dt');
export const Em = createTagComponent('em', 'Em');
export const Fieldset = createTagComponent('fieldset', 'Fieldset');
export const Figcaption = createTagComponent('figcaption', 'Figcaption');
export const Figure = createTagComponent('figure', 'Figure');
export const Footer = createTagComponent('footer', 'Footer');
export const Form = createTagComponent('form', 'Form');
export const H1 = createTagComponent('h1', 'H1');
export const H2 = createTagComponent('h2', 'H2');
export const H3 = createTagComponent('h3', 'H3');
export const H4 = createTagComponent('h4', 'H4');
export const H5 = createTagComponent('h5', 'H5');
export const H6 = createTagComponent('h6', 'H6');
export const Header = createTagComponent('header', 'Header');
export const Hgroup = createTagComponent('hgroup', 'Hgroup');
export const I = createTagComponent('i', 'I');
export const Iframe = createTagComponent('iframe', 'Iframe');
export const Ins = createTagComponent('ins', 'Ins');
export const Kbd = createTagComponent('kbd', 'Kbd');
export const Label = createTagComponent('label', 'Label');
export const Legend = createTagComponent('legend', 'Legend');
export const Li = createTagComponent('li', 'Li');
export const Mark = createTagComponent('mark', 'Mark');
export const Menu = createTagComponent('menu', 'Menu');
export const Nav = createTagComponent('nav', 'Nav');
export const Ol = createTagComponent('ol', 'Ol');
export const Output = createTagComponent('output', 'Output');
export const P = createTagComponent('p', 'P');
export const Pre = createTagComponent('pre', 'Pre');
export const Q = createTagComponent('q', 'Q');
export const Ruby = createTagComponent('ruby', 'Ruby');
export const S = createTagComponent('s', 'S');
export const Samp = createTagComponent('samp', 'Samp');
export const Section = createTagComponent('section', 'Section');
export const Small = createTagComponent('small', 'Small');
export const Span = createTagComponent('span', 'Span');
export const Strike = createTagComponent('strike', 'Strike');
export const Strong = createTagComponent('strong', 'Strong');
export const Sub = createTagComponent('sub', 'Sub');
export const Summary = createTagComponent('summary', 'Summary');
export const Sup = createTagComponent('sup', 'Sup');
export const Table = createTagComponent('table', 'Table');
export const Tbody = createTagComponent('tbody', 'Tbody');
export const Td = createTagComponent('td', 'Td');
export const Tfoot = createTagComponent('tfoot', 'Tfoot');
export const Th = createTagComponent('th', 'Th');
export const Thead = createTagComponent('thead', 'Thead');
export const Time = createTagComponent('time', 'Time');
export const Tr = createTagComponent('tr', 'Tr');
export const Tt = createTagComponent('tt', 'Tt');
export const U = createTagComponent('u', 'U');
export const Ul = createTagComponent('ul', 'Ul');
export const Var = createTagComponent('var', 'Var');
export const Video = createTagComponent('video', 'Video');
