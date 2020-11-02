export default ({  appStream, title, preloadedState, res  }) => {
    res.write(`<html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="This is an example of a meta description. This will often show up in search results.">
        <title>${title}</title>
        </head>
        <body>
        <div id="root">`
    );
    appStream.pipe(
        res,
        { end: false },
    );
    appStream.on('end', () => {
        res.write(`</div>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                /</g,
                '\\u003c'
            )}</script>
            <script src="bundle.js"></script></body>
            </html>`
        );
        res.end();
    });
}