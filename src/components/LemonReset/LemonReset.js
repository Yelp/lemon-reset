// @flow

import * as React from 'react';
import classNames from 'classnames';
import styles from './LemonReset.scss';

type DomTagsType =
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
    tag: DomTagsType,
    children?: React.Node,
    className?: string,
    tagRef?: ?React.Ref<*>,
};

export const DomTags = ({ tag: Tag, children, className, tagRef, ...otherProps }: Props) => (
    <Tag className={classNames(styles[`lemon--${Tag}`], className)} ref={tagRef} {...otherProps}>
        {children}
    </Tag>
);

DomTags.defaultProps = {
    children: null,
    className: '',
    tagRef: null,
};

type NoChildTagProps = {
    className?: string,
};

export const Embed = ({ className, ...otherProps }: NoChildTagProps) => (
    <DomTags tag="embed" className={className} {...otherProps} />
);

Embed.defaultProps = {
    className: '',
};

export const Img = ({ className, ...otherProps }: NoChildTagProps) => (
    <DomTags tag="img" className={className} {...otherProps} />
);

Img.defaultProps = {
    className: '',
};

type TagProps = {
    children?: React.Node,
    className?: string,
};

export const A = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="a" className={className} {...otherProps}>
        {children}
    </DomTags>
);

A.defaultProps = {
    children: null,
    className: '',
};

export const Abbr = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="abbr" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Abbr.defaultProps = {
    children: null,
    className: '',
};

export const Acronym = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="acronym" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Acronym.defaultProps = {
    children: null,
    className: '',
};

export const Address = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="address" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Address.defaultProps = {
    children: null,
    className: '',
};

export const Applet = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="applet" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Applet.defaultProps = {
    children: null,
    className: '',
};

export const Article = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="article" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Article.defaultProps = {
    children: null,
    className: '',
};

export const Aside = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="aside" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Aside.defaultProps = {
    children: null,
    className: '',
};

export const Audio = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="audio" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Audio.defaultProps = {
    children: null,
    className: '',
};

export const B = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="b" className={className} {...otherProps}>
        {children}
    </DomTags>
);

B.defaultProps = {
    children: null,
    className: '',
};

export const Big = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="big" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Big.defaultProps = {
    children: null,
    className: '',
};

export const Blockquote = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="blockquote" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Blockquote.defaultProps = {
    children: null,
    className: '',
};

export const Canvas = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="canvas" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Canvas.defaultProps = {
    children: null,
    className: '',
};

export const Caption = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="caption" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Caption.defaultProps = {
    children: null,
    className: '',
};

export const Center = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="center" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Center.defaultProps = {
    children: null,
    className: '',
};

export const Cite = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="cite" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Cite.defaultProps = {
    children: null,
    className: '',
};

export const Code = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="code" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Code.defaultProps = {
    children: null,
    className: '',
};

export const Dd = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="dd" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Dd.defaultProps = {
    children: null,
    className: '',
};

export const Del = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="del" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Del.defaultProps = {
    children: null,
    className: '',
};

export const Details = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="details" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Details.defaultProps = {
    children: null,
    className: '',
};

export const Dfn = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="dfn" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Dfn.defaultProps = {
    children: null,
    className: '',
};

export const Div = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="div" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Div.defaultProps = {
    children: null,
    className: '',
};

export const Dl = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="dl" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Dl.defaultProps = {
    children: null,
    className: '',
};

export const DomObject = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="object" className={className} {...otherProps}>
        {children}
    </DomTags>
);

DomObject.defaultProps = {
    children: null,
    className: '',
};

export const Dt = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="dt" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Dt.defaultProps = {
    children: null,
    className: '',
};

export const Em = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="em" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Em.defaultProps = {
    children: null,
    className: '',
};

export const Fieldset = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="fieldset" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Fieldset.defaultProps = {
    children: null,
    className: '',
};

export const Figcaption = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="figcaption" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Figcaption.defaultProps = {
    children: null,
    className: '',
};

export const Figure = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="figure" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Figure.defaultProps = {
    children: null,
    className: '',
};

export const Footer = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="footer" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Footer.defaultProps = {
    children: null,
    className: '',
};

export const Form = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="form" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Form.defaultProps = {
    children: null,
    className: '',
};

export const H1 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h1" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H1.defaultProps = {
    children: null,
    className: '',
};

export const H2 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h2" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H2.defaultProps = {
    children: null,
    className: '',
};

export const H3 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h3" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H3.defaultProps = {
    children: null,
    className: '',
};

export const H4 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h4" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H4.defaultProps = {
    children: null,
    className: '',
};

export const H5 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h5" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H5.defaultProps = {
    children: null,
    className: '',
};

export const H6 = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="h6" className={className} {...otherProps}>
        {children}
    </DomTags>
);

H6.defaultProps = {
    children: null,
    className: '',
};

export const Header = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="header" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Header.defaultProps = {
    children: null,
    className: '',
};

export const Hgroup = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="hgroup" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Hgroup.defaultProps = {
    children: null,
    className: '',
};

export const I = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="i" className={className} {...otherProps}>
        {children}
    </DomTags>
);

I.defaultProps = {
    children: null,
    className: '',
};

export const Iframe = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="iframe" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Iframe.defaultProps = {
    children: null,
    className: '',
};

export const Ins = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="ins" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Ins.defaultProps = {
    children: null,
    className: '',
};

export const Kbd = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="kbd" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Kbd.defaultProps = {
    children: null,
    className: '',
};

export const Label = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="label" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Label.defaultProps = {
    children: null,
    className: '',
};

export const Legend = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="legend" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Legend.defaultProps = {
    children: null,
    className: '',
};

export const Li = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="li" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Li.defaultProps = {
    children: null,
    className: '',
};

export const Mark = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="mark" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Mark.defaultProps = {
    children: null,
    className: '',
};

export const Menu = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="menu" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Menu.defaultProps = {
    children: null,
    className: '',
};

export const Nav = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="nav" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Nav.defaultProps = {
    children: null,
    className: '',
};

export const Ol = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="ol" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Ol.defaultProps = {
    children: null,
    className: '',
};

export const Output = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="output" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Output.defaultProps = {
    children: null,
    className: '',
};

export const P = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="p" className={className} {...otherProps}>
        {children}
    </DomTags>
);

P.defaultProps = {
    children: null,
    className: '',
};

export const Pre = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="pre" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Pre.defaultProps = {
    children: null,
    className: '',
};

export const Q = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="q" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Q.defaultProps = {
    children: null,
    className: '',
};

export const Ruby = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="ruby" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Ruby.defaultProps = {
    children: null,
    className: '',
};

export const S = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="s" className={className} {...otherProps}>
        {children}
    </DomTags>
);

S.defaultProps = {
    children: null,
    className: '',
};

export const Samp = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="samp" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Samp.defaultProps = {
    children: null,
    className: '',
};

export const Section = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="section" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Section.defaultProps = {
    children: null,
    className: '',
};

export const Small = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="small" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Small.defaultProps = {
    children: null,
    className: '',
};

export const Span = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="span" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Span.defaultProps = {
    children: null,
    className: '',
};

export const Strike = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="strike" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Strike.defaultProps = {
    children: null,
    className: '',
};

export const Strong = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="strong" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Strong.defaultProps = {
    children: null,
    className: '',
};

export const Sub = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="sub" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Sub.defaultProps = {
    children: null,
    className: '',
};

export const Summary = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="summary" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Summary.defaultProps = {
    children: null,
    className: '',
};

export const Sup = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="sup" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Sup.defaultProps = {
    children: null,
    className: '',
};

export const Table = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="table" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Table.defaultProps = {
    children: null,
    className: '',
};

export const Tbody = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="tbody" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Tbody.defaultProps = {
    children: null,
    className: '',
};

export const Td = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="td" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Td.defaultProps = {
    children: null,
    className: '',
};

export const Tfoot = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="tfoot" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Tfoot.defaultProps = {
    children: null,
    className: '',
};

export const Th = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="th" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Th.defaultProps = {
    children: null,
    className: '',
};

export const Thead = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="thead" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Thead.defaultProps = {
    children: null,
    className: '',
};

export const Time = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="time" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Time.defaultProps = {
    children: null,
    className: '',
};

export const Tr = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="tr" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Tr.defaultProps = {
    children: null,
    className: '',
};

export const Tt = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="tt" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Tt.defaultProps = {
    children: null,
    className: '',
};

export const U = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="u" className={className} {...otherProps}>
        {children}
    </DomTags>
);

U.defaultProps = {
    children: null,
    className: '',
};

export const Ul = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="ul" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Ul.defaultProps = {
    children: null,
    className: '',
};

export const Var = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="var" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Var.defaultProps = {
    children: null,
    className: '',
};

export const Video = ({ children, className, ...otherProps }: TagProps) => (
    <DomTags tag="video" className={className} {...otherProps}>
        {children}
    </DomTags>
);

Video.defaultProps = {
    children: null,
    className: '',
};
