//const baseURL = "https://nschnell.uber.space/pathfinder-19";
const baseURL = 'http://0.0.0.0:3000';
const headers = new Headers();

async function sendRequest(url) {
  const response = await (fetch(url, {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default',
  }).catch(() =>
    Promise.reject(new Error('cannot fetch GET request'))
  ));

  if (response.status !== 200)
    return Promise.reject(new Error('server request returned bad status'));

  return response;
}

async function getControl(param) {
  const url = baseURL + '/control' + param;
  const response = await (sendRequest(url).catch(() =>
    Promise.reject(new Error('cannot get control from server'))
  ));

  return response.text();
}

async function setControl(param, errorCallback = function() {}) {
  const query = new URLSearchParams(param);
  const url = baseURL + '/control' + '?' + query.toString();
  const response = await (fetch(url, { method: 'PUT' }).catch(() =>
    Promise.reject(new Error('cannot set control at server'))
  ));

  return response;
}

async function setStatus(status) {
  setControl('status=' + status);
}

async function getStatus() {
  return getControl('/status');
}

export { getStatus, setStatus };
