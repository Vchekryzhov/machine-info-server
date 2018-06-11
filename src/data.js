class Data {
  constructor() {
    this.machine = {};
  }
  // { id: '110', vel: 'vel1', speed: 'speed1' }
  setData(data) {
    this.machine = Object.assign(this.machine, {
        data.id: data
      };
    }
  }
  export data = new Data;