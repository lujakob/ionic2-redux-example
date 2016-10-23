import { Injectable } from "@angular/core";
import { Actions, AppStore } from "angular2-redux";

type Types = "INCREMENT" | "DECREMENT"| "DOUBLE" | "ADD_FIVE";
export const CounterActionTypes = {
    INCREMENT: "INCREMENT" as Types,
    DECREMENT: "DECREMENT" as Types,
    DOUBLE: "DOUBLE" as Types,
    ADD_FIVE: "ADD_FIVE" as Types

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