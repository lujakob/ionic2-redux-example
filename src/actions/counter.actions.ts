import { Injectable } from "@angular/core";
import { Actions, AppStore } from "angular2-redux";

export const CounterActionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    DOUBLE: "DOUBLE",
    ADD_FIVE: "ADD_FIVE"
};

export interface CounterAction {
    type:string;
    count?;
}

@Injectable()
export class CounterActions extends Actions {

    constructor(appStore:AppStore) {
        super(appStore);
    }

    increment() {
        return {
            type: CounterActionTypes.INCREMENT
        }
    }
    decrement() {
        return {
            type: CounterActionTypes.DECREMENT
        }
    }
    doubleIncrement() {
        return {
            type: CounterActionTypes.DOUBLE
        }
    }
    addFive() {
        return {
            type: CounterActionTypes.ADD_FIVE
        }
    }
}