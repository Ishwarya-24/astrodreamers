import React from "react";
import { render } from "react-dom";
// import { createRoot } from "react-dom/client";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function CodeSnippet(props) {
    
    const exampleCode = `
   ${props.children}
`;

    return (
  <Highlight {...defaultProps} code={exampleCode} language="jsx" sx={{bgColor: '#fff'}}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
            }


// If you are using React 18
// const root = createRoot(document.getElementById('root'));
// root.render(Content);