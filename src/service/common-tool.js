/**
 * this file is single instance Tool class
 * 
 *  about wx
 */
export class Tool {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  alert(msg) {
      alert(msg)
  }

  redirect() {

  }
  
}
