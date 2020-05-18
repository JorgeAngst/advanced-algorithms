const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  for (i = 0; i < queue.MAX_SIZE; i++) {
    const item = document.createElement('li');
    item.classList = 'inactive';
    queueUL.appendChild(item)
  }
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'underflow') {
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.innerHTML = 'underflow';
  } else if (type === 'overflow') {
    warningTopQueue.style.display = 'block';
    warningTopQueue.innerHTML = 'overflow';
  }
};

const addToQueue = () => {
  if (queue.canEnqueue()) {
    const item = document.querySelector('.list-queue .inactive');
    item.className = 'active';
    item.innerHTML = queueInput.value;
    queue.enqueue(item);
    clearQueueInput();
    warningBottomQueue.style.display = 'none';
    warningBottomQueue.innerHTML = '';
  } else {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningQueue('underflow')
  } else {
    const item = queue.dequeue();
    item.className = 'inactive';
    item.innerHTML = '';
    warningTopQueue.style.display = 'none';
    warningTopQueue.innerHTML = '';
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
