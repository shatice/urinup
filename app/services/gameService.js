/* eslint-disable radix */
class GameService {
  constructor() {
    this.actualTime = 0;
    this.maxTime = 180;
    this.time = 0; 
  }

  counter() {
    // div = document.getElementById('div');
    this.actualTime++;
    this.time = this.actualTime / this.maxTime;
    // div.style.transform =  "translateY("+ distance* this.time +"px)";
    
    // console.log(this.time);

    if (this.actualTime >= this.maxTime) {
      
    } else {
      setTimeout(() => 
      this.counter(), 1000)
    }
  }
}

export default new GameService();
