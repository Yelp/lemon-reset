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

type Props = {
    tag: LemonResetType,
    children?: React.Node,
    className?: string,
    tagRef?: ?React.Ref<*>,
};

export const LemonReset = ({ tag: Tag, children, className, tagRef, ...otherProps }: Props) => {
    let classes = styles[`lemon--${Tag}`];
    if (className != null && className !== '') {
        classes += ` ${className}`;
    }
    return (
        <Tag className={classes} ref={tagRef} {...otherProps}>
            {children}
        </Tag>
    );
};

LemonReset.displayName = 'LemonReset';

LemonReset.defaultProps = {
    children: null,
    className: '',
    tagRef: null,
};

type TagProps = {
    children?: React.Node,
    className?: string,
};

type NoChildTagProps = {
    className?: string,
};

function createTagComponent(tag: LemonResetType) {
    const component = (props: TagProps) => <LemonReset tag={tag} {...props} />;
    component.defaultProps = {
        className: '',
    };
    return component;
}

function createNoChildTagComponent(tag: LemonResetType) {
    const component = (props: NoChildTagProps) => <LemonReset tag={tag} {...props} />;
    component.defaultProps = {
        children: null,
        className: '',
    };
    return component;
}

export const Embed = createNoChildTagComponent('embed');
export const Img = createNoChildTagComponent('img');

export const A = createTagComponent('a');
export const Abbr = createTagComponent('abbr');
export const Acronym = createTagComponent('acronym');
export const Address = createTagComponent('address');
export const Applet = createTagComponent('applet');
export const Article = createTagComponent('article');
export const Aside = createTagComponent('aside');
export const Audio = createTagComponent('audio');
export const B = createTagComponent('b');
export const Big = createTagComponent('big');
export const Blockquote = createTagComponent('blockquote');
export const Canvas = createTagComponent('canvas');
export const Caption = createTagComponent('caption');
export const Center = createTagComponent('center');
export const Cite = createTagComponent('cite');
export const Code = createTagComponent('code');
export const Dd = createTagComponent('dd');
export const Del = createTagComponent('del');
export const Details = createTagComponent('details');
export const Dfn = createTagComponent('dfn');
export const Div = createTagComponent('div');
export const Dl = createTagComponent('dl');
export const DomObject = createTagComponent('object');
export const Dt = createTagComponent('dt');
export const Em = createTagComponent('em');
export const Fieldset = createTagComponent('fieldset');
export const Figcaption = createTagComponent('figcaption');
export const Figure = createTagComponent('figure');
export const Footer = createTagComponent('footer');
export const Form = createTagComponent('form');
export const H1 = createTagComponent('h1');
export const H2 = createTagComponent('h2');
export const H3 = createTagComponent('h3');
export const H4 = createTagComponent('h4');
export const H5 = createTagComponent('h5');
export const H6 = createTagComponent('h6');
export const Header = createTagComponent('header');
export const Hgroup = createTagComponent('hgroup');
export const I = createTagComponent('i');
export const Iframe = createTagComponent('iframe');
export const Ins = createTagComponent('ins');
export const Kbd = createTagComponent('kbd');
export const Label = createTagComponent('label');
export const Legend = createTagComponent('legend');
export const Li = createTagComponent('li');
export const Mark = createTagComponent('mark');
export const Menu = createTagComponent('menu');
export const Nav = createTagComponent('nav');
export const Ol = createTagComponent('ol');
export const Output = createTagComponent('output');
export const P = createTagComponent('p');
export const Pre = createTagComponent('pre');
export const Q = createTagComponent('q');
export const Ruby = createTagComponent('ruby');
export const S = createTagComponent('s');
export const Samp = createTagComponent('samp');
export const Section = createTagComponent('section');
export const Small = createTagComponent('small');
export const Span = createTagComponent('span');
export const Strike = createTagComponent('strike');
export const Strong = createTagComponent('strong');
export const Sub = createTagComponent('sub');
export const Summary = createTagComponent('summary');
export const Sup = createTagComponent('sup');
export const Table = createTagComponent('table');
export const Tbody = createTagComponent('tbody');
export const Td = createTagComponent('td');
export const Tfoot = createTagComponent('tfoot');
export const Th = createTagComponent('th');
export const Thead = createTagComponent('thead');
export const Time = createTagComponent('time');
export const Tr = createTagComponent('tr');
export const Tt = createTagComponent('tt');
export const U = createTagComponent('u');
export const Ul = createTagComponent('ul');
export const Var = createTagComponent('var');
export const Video = createTagComponent('video');
