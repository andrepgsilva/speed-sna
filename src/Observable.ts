export type Observer = (() => void);
export type ObservableType = Observable;

class Observable {
  observers: Array<Observer>
  
  constructor() {
    this.observers = [];
  }
  
  subscribe(f: Observer) {
    this.observers.push(f);
  }

  unsubscribe(f: Observer) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }
  
  notify(data = null) {
    this.observers.forEach((observer: any) => observer(data));
  }
}

export default Observable;