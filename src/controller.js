import '@babel/polyfill';
import { getStatus, setStatus } from './utils/control';

let errorOverlay = null;
let statusSwitch = null;
let status = null;

function updateStatus() {
  getStatus()
    .then((value) => {
      status = value;
    })
    .catch((err) => {
      errorOverlay.open(`Oops, ${err}.`);
    });
}

function switchStatus(e) {
  if (status === 'running')
    status = 'off';
  else
    status = 'running';

  setStatus(status);
  statusSwitch.innerHTML = status;
}

function main() {
  errorOverlay = document.getElementById('error-overlay');
  statusSwitch = document.getElementById('status-switch');

  updateStatus();
  statusSwitch.addEventListener('click', switchStatus);
}

window.addEventListener('load', main);
