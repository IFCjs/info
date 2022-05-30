# MDX Common Errors

The MDX compiler is not that smart. So, we need to make sure that we write MDX in a way that compiler can understand.

Few things you have to keep in mind:

1.  `<a>` opening tag must be placed on the start of a line without any character before it except whitespaces.

```jsx
❌

Click this <a href="https://ifcjs.github.io/info">link{" "}</a>
to IFC.js website.

✔

Click this{" "}
<a href="https://ifcjs.github.io/info">link </a>
to IFC.js website.
```

2.  `</a>` closing tag must not be followed by Javascript expression (encapsulated by `{}` such as `{" "}`).

```jsx
❌

<a href="https://ifcjs.github.io/info">Link</a>{" "}
to IFC.js website.

✔

<a href="https://ifcjs.github.io/info">Link{" "}</a>
to IFC.js website.
```

3.  JSX element is a Javascript expression. Therefore, if you want to pass a JSX element as a prop of another JSX component, you must wrap it with `{}`.

```jsx
❌

<IfcImage image=<img src="..." alt=".."></img>></IfcImage>

✔

<IfcImage image={<img src="..." alt=".."></img>}></IfcImage>
```

4.  Unnecessary whitespaces at the beginning of a line. Try formatting the documents to solve this. Run:

```bash
yarn format
```

The MDX formatter is also not that smart. Some characters that are not necessary but acceptable could make the formatting result volatile.

Few things you have to keep in mind:

1.  Do not wrap a prop of JSX component or element with `{}` if it does not need to be a Javascript expression. Example:

```jsx
❌

<a href={"https://ifcjs.github.io/info"}>Link</a>

✔

<a href="https://ifcjs.github.io/info">Link</a>
```

After applying above solutions, format your MDX documents. Run:

```bash
yarn format
```

Then check the stability. Run:

```bash
yarn lint:format
```
