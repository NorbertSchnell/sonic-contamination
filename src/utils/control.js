const baseURL = "https://nschnell.uber.space/sonic-contamination";
//const baseURL = 'http://localhost:3000/';

const headers = new Headers();

async function getControl(param) {
  const url = baseURL + '/control' + param;
  const response = await (fetch(url, {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default',
  }).catch(() => {
    return Promise.reject(new Error('cannot get control from server'));    
  }));

  return response.text();
}

async function setControl(param, errorCallback = function() {}) {
  const query = new URLSearchParams(param);
  const url = baseURL + '/control' + '?' + query.toString();
  const response = await (fetch(url, { method: 'PUT' }).catch(() => {
    return Promise.reject(new Error('cannot get control from server'));    
  }));

  return response;
}

async function setStatus(status) {
  setControl('status=' + status);
}

async function getStatus() {
  return getControl('/status');
}

export { getStatus, setStatus };
