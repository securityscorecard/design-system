/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

const docsRootPath = path.resolve(__dirname, '../docs-build/index.html');
const version = process.env.VERSION;
const url = `https://ajkl2533.github.io/semantic-release-test/${version}`;
const content = `<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="1; url=${url}">
        <script type="text/javascript">
            window.location.href = "${url}"
        </script>
        <title>Page Redirection</title>
    </head>
    <body>
        If you are not redirected automatically, use this <a href='${url}'>link</a>.
    </body>
</html>
`;

fs.writeFileSync(docsRootPath, content);
