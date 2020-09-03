// import '@babel/polyfill';
import path from 'path';
import url from 'url';
import connect from 'connect';
import serveStatic from 'serve-static';
import portfinder from 'portfinder';
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

  switch(param) {
    case '/status':
    response.setHeader("content-type", "text/html; charset=utf-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.write(status);
    break;
  }

  response.end();
}

function handlePUT(request, response) {
  const parsedURL = url.parse(request.url, true);
  const query = parsedURL.query;

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

// static file server
portfinder.basePort = 3000;
portfinder.getPortPromise()
  .then(port => {
    connect()
      .use('/control', handleControl)
      .use(serveStatic(publicDir))
      .listen(port, () => console.log(`> server running on http://127.0.0.1:${port}`));
  })
  .catch((err) => {
    console.error('no available port');
  });
