// @flow

import * as React from 'react';
import classNames from 'classnames';
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

export const LemonReset = ({ tag: Tag, children, className, tagRef, ...otherProps }: Props) => (
    <Tag className={classNames(styles[`lemon--${Tag}`], className)} ref={tagRef} {...otherProps}>
        {children}
    </Tag>
);

LemonReset.defaultProps = {
    children: null,
    className: '',
    tagRef: null,
};

type NoChildTagProps = {
    className?: string,
};

export const Embed = ({ className, ...otherProps }: NoChildTagProps) => (
    <LemonReset tag="embed" className={className} {...otherProps} />
);

Embed.defaultProps = {
    className: '',
};

export const Img = ({ className, ...otherProps }: NoChildTagProps) => (
    <LemonReset tag="img" className={className} {...otherProps} />
);

Img.defaultProps = {
    className: '',
};

type TagProps = {
    children?: React.Node,
    className?: string,
};

export const A = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="a" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

A.defaultProps = {
    children: null,
    className: '',
};

export const Abbr = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="abbr" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Abbr.defaultProps = {
    children: null,
    className: '',
};

export const Acronym = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="acronym" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Acronym.defaultProps = {
    children: null,
    className: '',
};

export const Address = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="address" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Address.defaultProps = {
    children: null,
    className: '',
};

export const Applet = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="applet" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Applet.defaultProps = {
    children: null,
    className: '',
};

export const Article = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="article" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Article.defaultProps = {
    children: null,
    className: '',
};

export const Aside = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="aside" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Aside.defaultProps = {
    children: null,
    className: '',
};

export const Audio = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="audio" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Audio.defaultProps = {
    children: null,
    className: '',
};

export const B = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="b" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

B.defaultProps = {
    children: null,
    className: '',
};

export const Big = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="big" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Big.defaultProps = {
    children: null,
    className: '',
};

export const Blockquote = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="blockquote" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Blockquote.defaultProps = {
    children: null,
    className: '',
};

export const Canvas = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="canvas" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Canvas.defaultProps = {
    children: null,
    className: '',
};

export const Caption = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="caption" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Caption.defaultProps = {
    children: null,
    className: '',
};

export const Center = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="center" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Center.defaultProps = {
    children: null,
    className: '',
};

export const Cite = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="cite" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Cite.defaultProps = {
    children: null,
    className: '',
};

export const Code = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="code" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Code.defaultProps = {
    children: null,
    className: '',
};

export const Dd = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="dd" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Dd.defaultProps = {
    children: null,
    className: '',
};

export const Del = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="del" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Del.defaultProps = {
    children: null,
    className: '',
};

export const Details = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="details" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Details.defaultProps = {
    children: null,
    className: '',
};

export const Dfn = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="dfn" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Dfn.defaultProps = {
    children: null,
    className: '',
};

export const Div = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="div" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Div.defaultProps = {
    children: null,
    className: '',
};

export const Dl = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="dl" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Dl.defaultProps = {
    children: null,
    className: '',
};

export const DomObject = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="object" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

DomObject.defaultProps = {
    children: null,
    className: '',
};

export const Dt = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="dt" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Dt.defaultProps = {
    children: null,
    className: '',
};

export const Em = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="em" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Em.defaultProps = {
    children: null,
    className: '',
};

export const Fieldset = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="fieldset" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Fieldset.defaultProps = {
    children: null,
    className: '',
};

export const Figcaption = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="figcaption" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Figcaption.defaultProps = {
    children: null,
    className: '',
};

export const Figure = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="figure" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Figure.defaultProps = {
    children: null,
    className: '',
};

export const Footer = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="footer" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Footer.defaultProps = {
    children: null,
    className: '',
};

export const Form = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="form" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Form.defaultProps = {
    children: null,
    className: '',
};

export const H1 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h1" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H1.defaultProps = {
    children: null,
    className: '',
};

export const H2 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h2" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H2.defaultProps = {
    children: null,
    className: '',
};

export const H3 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h3" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H3.defaultProps = {
    children: null,
    className: '',
};

export const H4 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h4" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H4.defaultProps = {
    children: null,
    className: '',
};

export const H5 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h5" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H5.defaultProps = {
    children: null,
    className: '',
};

export const H6 = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="h6" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

H6.defaultProps = {
    children: null,
    className: '',
};

export const Header = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="header" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Header.defaultProps = {
    children: null,
    className: '',
};

export const Hgroup = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="hgroup" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Hgroup.defaultProps = {
    children: null,
    className: '',
};

export const I = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="i" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

I.defaultProps = {
    children: null,
    className: '',
};

export const Iframe = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="iframe" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Iframe.defaultProps = {
    children: null,
    className: '',
};

export const Ins = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="ins" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Ins.defaultProps = {
    children: null,
    className: '',
};

export const Kbd = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="kbd" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Kbd.defaultProps = {
    children: null,
    className: '',
};

export const Label = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="label" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Label.defaultProps = {
    children: null,
    className: '',
};

export const Legend = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="legend" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Legend.defaultProps = {
    children: null,
    className: '',
};

export const Li = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="li" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Li.defaultProps = {
    children: null,
    className: '',
};

export const Mark = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="mark" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Mark.defaultProps = {
    children: null,
    className: '',
};

export const Menu = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="menu" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Menu.defaultProps = {
    children: null,
    className: '',
};

export const Nav = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="nav" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Nav.defaultProps = {
    children: null,
    className: '',
};

export const Ol = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="ol" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Ol.defaultProps = {
    children: null,
    className: '',
};

export const Output = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="output" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Output.defaultProps = {
    children: null,
    className: '',
};

export const P = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="p" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

P.defaultProps = {
    children: null,
    className: '',
};

export const Pre = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="pre" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Pre.defaultProps = {
    children: null,
    className: '',
};

export const Q = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="q" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Q.defaultProps = {
    children: null,
    className: '',
};

export const Ruby = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="ruby" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Ruby.defaultProps = {
    children: null,
    className: '',
};

export const S = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="s" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

S.defaultProps = {
    children: null,
    className: '',
};

export const Samp = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="samp" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Samp.defaultProps = {
    children: null,
    className: '',
};

export const Section = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="section" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Section.defaultProps = {
    children: null,
    className: '',
};

export const Small = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="small" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Small.defaultProps = {
    children: null,
    className: '',
};

export const Span = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="span" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Span.defaultProps = {
    children: null,
    className: '',
};

export const Strike = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="strike" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Strike.defaultProps = {
    children: null,
    className: '',
};

export const Strong = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="strong" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Strong.defaultProps = {
    children: null,
    className: '',
};

export const Sub = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="sub" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Sub.defaultProps = {
    children: null,
    className: '',
};

export const Summary = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="summary" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Summary.defaultProps = {
    children: null,
    className: '',
};

export const Sup = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="sup" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Sup.defaultProps = {
    children: null,
    className: '',
};

export const Table = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="table" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Table.defaultProps = {
    children: null,
    className: '',
};

export const Tbody = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="tbody" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Tbody.defaultProps = {
    children: null,
    className: '',
};

export const Td = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="td" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Td.defaultProps = {
    children: null,
    className: '',
};

export const Tfoot = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="tfoot" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Tfoot.defaultProps = {
    children: null,
    className: '',
};

export const Th = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="th" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Th.defaultProps = {
    children: null,
    className: '',
};

export const Thead = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="thead" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Thead.defaultProps = {
    children: null,
    className: '',
};

export const Time = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="time" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Time.defaultProps = {
    children: null,
    className: '',
};

export const Tr = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="tr" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Tr.defaultProps = {
    children: null,
    className: '',
};

export const Tt = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="tt" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Tt.defaultProps = {
    children: null,
    className: '',
};

export const U = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="u" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

U.defaultProps = {
    children: null,
    className: '',
};

export const Ul = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="ul" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Ul.defaultProps = {
    children: null,
    className: '',
};

export const Var = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="var" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Var.defaultProps = {
    children: null,
    className: '',
};

export const Video = ({ children, className, ...otherProps }: TagProps) => (
    <LemonReset tag="video" className={className} {...otherProps}>
        {children}
    </LemonReset>
);

Video.defaultProps = {
    children: null,
    className: '',
};
