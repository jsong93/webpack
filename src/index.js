import { Dog } from './dog.js';
// import _ from 'lodash';
import './index.css';

function component() {
  const dog = new Dog('erha'),
    div = document.createElement('div');
  div.innerHTML = dog.bark();
  return div;
}
const bt = document.createElement('button');
bt.innerHTML = 'pup';
bt.addEventListener('click', e =>
  import(/* webpackChunkName: 'lodash' */ 'lodash').then(_ =>
    console.log(_.join(['hello', 'pup'], ' '))
  )
);
// console.log(_.join(['hello', 'pup']), ' ');
document.body.appendChild(component());
document.body.appendChild(bt);
