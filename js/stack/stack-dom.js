const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  for (i = 0; i < newStack.MAX_SIZE; i++) {
    const item = document.createElement('li');
    item.className = 'inactive';
    stackList.appendChild(item);
  }
};

renderListStack();

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerHTML = 'underflow';
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerHTML = 'overflow';
  }
};

const addToStack = () => {
  if (newStack.canPush()) {
    const item = document.querySelector('.list-stack .inactive')
    item.className = 'active';
    item.innerHTML = stackInput.value;
    newStack.push(item);
    clearStackInput();
    warningBottomStack.style.display = 'none';
    warningBottomStack.innerHTML = '';
  } else {
    generateWarningStack('overflow');
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    const item = newStack.pop();
    item.className = 'inactive';
    item.innerHTML = '';
    warningTopStack.style.display = 'none';
    warningTopStack.innerHTML = '';
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
