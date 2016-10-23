import { Component } from '@angular/core';
import { AppStore } from 'angular2-redux';
import { counterSelector } from "../../reducers/counter.reducer";


import { CounterActions } from "../../actions/counter.actions";

@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    public counter: number;
  constructor(
      private appStore: AppStore,
      private counterActions: CounterActions
  ) {
      appStore.select(counterSelector).subscribe(counter => {
          console.log("counterSelector", counter);
          this.counter = counter;
      });
  }
    increment() {
        this.appStore.dispatch(this.counterActions.increment());
        console.log(this.appStore.getState());
    }

    decrement() {
        this.appStore.dispatch(this.counterActions.decrement());
    }
}
