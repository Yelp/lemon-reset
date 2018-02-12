this is a div that says "ohai"

```
<DomTags.Div>
    <p>ohai there</p>
</DomTags.Div>
```

```
<DomTags.Span>
    ohai
</DomTags.Span>
```

This is an anchor tag with href and target passed in
```
<DomTags.A href="/example" target="_blank">
    ohai
</DomTags.A>
```

This is an unordered list
```
<DomTags.Ul>
    <DomTags.Li>one</DomTags.Li>
    <DomTags.Li>two</DomTags.Li>
    <DomTags.Li>three</DomTags.Li>
</DomTags.Ul>
```

This is a heading with an additional class
```
<DomTags.H1 classes='heading--wat heading--derp'>
    ohai
</DomTags.H1>
```

In order to use a ref, pass in a prop named `tagRef` with the ref.
```
<DomTags.Span tagRef={span => console.log(span)}>
    This has a ref
</DomTags.Span>
```
