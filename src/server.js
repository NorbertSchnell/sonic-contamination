import '@babel/polyfill';
import path from 'path';
import url from 'url';
import connect from 'connect';
import serveStatic from 'serve-static';
import livereload from 'livereload';

const statusEnum = ['running', 'off'];
let status = 'running';

const publicDir = path.join(process.cwd(), 'public');

const lrserver = livereload.createServer();
lrserver.watch(publicDir);

function handleControl(request, response, next) {
  switch (request.method) {
    case 'GET':
      handleGET(request, response);
      break;

    case 'PUT':
      handlePUT(request, response);
      break;
  }
}

function handleGET(request, response) {
  const parsedURL = url.parse(request.url, true);
  const param = parsedURL.path;

  response.setHeader("content-type", "text/html; charset=utf-8");
  response.setHeader("Access-Control-Allow-Origin", "*");

  switch (param) {
    case '/status':
      response.write(status);
      break;
  }

  response.end();
}

function handlePUT(request, response) {
  const parsedURL = url.parse(request.url, true);
  const query = parsedURL.query;

  response.setHeader("content-type", "text/html; charset=utf-8");
  response.setHeader("Access-Control-Allow-Origin", "*");

  for (const param in query) {
    const value = query[param];
    let success = false;

    switch (param) {
      case 'status':
        success = updateStatus(value);
        break;
    }

    if (!success)
      break;
  }

  response.end();
}

function updateStatus(value) {
  if (statusEnum.indexOf(value) >= 0) {
    status = value;
    console.log(`status = ${value}`);
    return true;
  }

  return false;
}

//const port = process.env.PORT || 3000;
const port = 3000;
const ip = '0.0.0.0';
const app = connect()
  .use('/control', handleControl)
  .use(serveStatic(publicDir))
  .listen(port, ip, () => console.log(`> server running on http://${ip}:${port}`));
