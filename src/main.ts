import './style.css'
import MyWorker from './myworker.ts?worker';
import MyInlineWorker from './myworker.ts?worker&inline';
import MySharedWorker from './myworker.ts?sharedworker';
import MyWorkerPath from './myworker.ts?worker&url';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Workers</h2>
    <div class="card">
      <button id="worker" type="button">worker</button>
      <button id="url-worker" type="button">url worker</button>
      <button id="inline-worker" type="button">inline worker</button>
      <button id="shared-worker" type="button">shared worker</button>
    </div>
    <h2>Named workers</h2>
    <div class="card">
      <button id="named-worker" type="button">named worker</button>
      <button id="named-url-worker" type="button">named-url worker</button>
      <button id="named-inline-worker" type="button">named inline worker</button>
      <button id="named-shared-worker" type="button">named shared worker</button>
    </div>
  </div>
`

const myWorker = new MyWorker();
const workerButton = document.querySelector<HTMLButtonElement>('#worker');
workerButton?.addEventListener('click', () => {
  console.log('clicked', 'worker');
  myWorker.postMessage(null);
});

const urlWorker = new Worker(MyWorkerPath)
const urlWorkerButton = document.querySelector<HTMLButtonElement>('#url-worker');
urlWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'url-worker');
  urlWorker.postMessage(null);
});

const namedUrlWorker = new Worker(MyWorkerPath, { name: 'named-url-worker' })
const namedUrlWorkerButton = document.querySelector<HTMLButtonElement>('#named-url-worker');
namedUrlWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'url-worker');
  namedUrlWorker.postMessage(null);
});

const namedWorker = new MyWorker({ name: 'named-worker' })
const namedWorkerButton = document.querySelector<HTMLButtonElement>('#named-worker');
namedWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'named worker');
  namedWorker.postMessage(null);
});

const inlineWorker = new MyInlineWorker()
const inlineWorkerButton = document.querySelector<HTMLButtonElement>('#inline-worker');
inlineWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'inline worker');
  inlineWorker.postMessage(null);
});

const namedInlineWorker = new MyInlineWorker({ name: 'named-inline-worker' })
const namedInlineWorkerButton = document.querySelector<HTMLButtonElement>('#named-inline-worker');
namedInlineWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'named inline');
  namedInlineWorker.postMessage(null);
});

const sharedWorker = new MySharedWorker();
sharedWorker.port.start();
const sharedWorkerButton = document.querySelector<HTMLButtonElement>('#shared-worker');
sharedWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'shared worker');
  myWorker.postMessage(null);
});

const namedSharedWorker = new MySharedWorker({ name: 'named-shared-worker' });
namedSharedWorker.port.start();
const namedSharedWorkerButton = document.querySelector<HTMLButtonElement>('#named-shared-worker');
namedSharedWorkerButton?.addEventListener('click', () => {
  console.log('clicked', 'named shared worker');
  myWorker.postMessage(null);
});

