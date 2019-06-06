import _ from 'lodash';
export class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(_.join(['hello', 'dog']), ' ');
    return `${this.name} 汪汪`;
  }
}
