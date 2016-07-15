class Animator {

  constructor(el,statePreffixStr) {
    this.statePreffix = ' ' + (statePreffixStr || 'state_');

    this.slide = el;
    this.originClass = this.slide.className;
    this.stateIndex;
  }

  set(num) {
    if(num == this.stateIndex) {
      return this.stateIndex;
    }

    this.slide.className = this.originClass + this.statePreffix + num;
    this.stateIndex = num;
    return this.stateIndex;
  }

  get() {
    return this.stateIndex;
  }
}

class AnimatorLinear extends Animator {
  constructor(arg) {
    super(arg.el, arg.preffix);
    this.maxIndex = arg.maxIndex;
  }
  next() {
    let nowIndex = this.get();

    if(nowIndex == this.maxIndex) {
      return this.maxIndex;
    }
    else {
      this.set(nowIndex+1);
      return this.get();
    }
  };
  prev() {
    let nowIndex = this.get();
    if(nowIndex == 1) {
      return this.get();
    }
    this.set(this.get()-1);
    return this.get();
  } 
}

class AnimatorLoop extends Animator {
  constructor(el, preffix, max) {
    super(el, preffix);
    this.maxIndex = max;
  }
  next() {
    let nowIndex = this.get();

    if(nowIndex < this.maxIndex)
      this.set(this.get()+1);
    else
      this.set(1);
  };
  prev() {
    this.set(this.get()-1);
  } 

}
