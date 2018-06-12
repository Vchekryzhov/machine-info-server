class Data {
  constructor() {
    this.machine = {};
  }
  // { id: '110', vel: 'vel1', speed: 'speed1' }
  set(data) {
    let id = data['id'];
    delete data['id'];
    let new_data = {};
    new_data[id] = data;
    this.machine = Object.assign(this.machine, new_data);
  }
  get(id) {
    return this.machine[id]
  }
}

export let data = new Data;