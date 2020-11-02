import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'

import App from '../src/app';
import createStore from '../src/store';
import routes from "../src/routes/index";
import loadData from "./loadData";
import render from "./render";

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    try {
        const store = createStore();
        Promise.all(loadData({ path : req?.path, store, routes})).then(() => {
            const sheet = new ServerStyleSheet()

            const context = {};
            const title = 'server side rendered sapient project'
            const appStream = 
                sheet.interleaveWithNodeStream(
                    ReactDOMServer.renderToNodeStream(
                        sheet.collectStyles(<App store={store} routes={routes} location={req?.url} context={context}/>)
                    )
                );

            // const styleTags = sheet.getStyleTags()
            const preloadedState = store.getState();

            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Transfer-Encoding': 'chunked',
            });

            res.write('<!doctype html>');
            
            render({ appStream, title, preloadedState, res })
        
        }).catch(err => {
            console.log(err)
            throw new Error(err);
        })

        
    } catch (error) {
        console.error('Something went wrong:', error);
        return res.status(500).send('Oops, better luck next time!');
    } 
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});