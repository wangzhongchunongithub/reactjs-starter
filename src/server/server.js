/**
 * Created by wangzhongchun on 6/16/2016.
 */
import Express from "express";
import path from 'path';

let app = Express();
let server;

const PATH_STYLES = path.resolve(__dirname, '../../dist');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3001, () => {
    let port = server.address().port;
    console.log('Server is listening at %s', port);
});