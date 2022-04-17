class Storage {
  constructor(key, type = localStorage) {
    this.type = type;
    if (type === localStorage || type === sessionStorage) {
      this.type.setItem(this.key = key, null);
  }
    if (type !== localStorage  && type !== sessionStorage) return console.log('Type is not defined');
  }
  set(value) {
    if (!value) value = null;
      this.type.setItem(this.key, this.value = value);
  }
  get() {
      this.type.getItem(this.key);
  }
  clear() {
    return this.type.setItem(this.key, null);
  }
  isEmpty() {
    if (this.type.getItem(this.key) === 'null') {
      return true;
    }
    return false;
  }
};
let named = new Storage('named');
named.set('Carl');
named.get();
let phone = new Storage('phone', sessionStorage);
phone.set('Nok');
phone.get();
