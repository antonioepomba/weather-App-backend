class Snapshot {
    constructor(array) {
      this.array = array;
    }
    
    restore() {
      return this.array;  
    }
  }
  
  var array = [1, 2];
  var snap = new Snapshot(array);
  array[0] = 1;
  array = snap.restore();
  console.log(array.join()); //It should log "1,2"
  array.push(4);
  array = snap.restore();
  array.pop()
  console.log(array.join()); //It should log "1,2"