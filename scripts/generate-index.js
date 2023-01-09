/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const docsRootPath = path.resolve(__dirname, '../docs-build');
const alphaDocsRootPath = path.resolve(__dirname, '../docs-build/alpha');
const version = process.env.VERSION;
const url = `https://securityscorecard.github.io/design-system/${version}`;
const getContent = (isDynamic = false) => `<!DOCTYPE HTML>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="1; url=${url}">
    <script type="text/javascript">
      window.location.href = \`${url}${
  // eslint-disable-next-line no-template-curly-in-string
  isDynamic ? '/${window.location.search}' : ''
}\`
    </script>
    <title>Page Redirection</title>
  </head>
  <body>
    If you are not redirected automatically, use this <a href='${url}'>link</a>.
  </body>
</html>
`;

fs.mkdirSync(alphaDocsRootPath, { recursive: true }, (err) => {
  if (err) throw err;
});
fs.writeFileSync(`${docsRootPath}/index.html`, getContent());
fs.writeFileSync(`${alphaDocsRootPath}/index.html`, getContent(true));
