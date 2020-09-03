//const baseURL = "https://nschnell.uber.space/sonic-contamination";
const baseURL = 'http://localhost:3000/';

async function getControl(param) {
  const url = baseURL + 'control/' + param;
  const response = await (fetch(url, { method: 'GET' }).catch(() => {
    return Promise.reject(new Error('cannot set control on server'));    
  }));

  return response.text();
}

async function setControl(param, errorCallback = function() {}) {
  const query = new URLSearchParams(param);
  const url = baseURL + '/control' + '?' + query.toString();
  const response = await fetch(url, { method: 'PUT' });

  if (response.status === 200)
    return response;

  return Promise.reject(new Error('cannot set control on server'));
}

async function setStatus(status) {
  setControl('status=' + status);
}

async function getStatus() {
  return getControl('status');
}

export { getStatus, setStatus };
