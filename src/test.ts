import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { TestBed } from '@angular/core/testing';
import { IonicModule }  from 'ionic-angular';

import { AppStore, createAppStoreFactoryWithOptions } from 'angular2-redux';
import { CounterActions } from './actions/counter.actions';
import reducers from './reducers/app.reducer';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): any { /* no op */};


// need this for npm run build
// export function appStoreFactory () {
//     return createAppStoreFactoryWithOptions({
//         reducers,
//         additionalMiddlewares: [],
//         debug: true
//     });
// }

// need this for ionic serve
export const appStoreFactory = createAppStoreFactoryWithOptions({
    reducers,
    additionalMiddlewares: [],
    debug: true
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing'),
])
  // First, initialize the Angular testing environment.
  .then(([testing, testingBrowser]) => {
    testing.getTestBed().initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );
  })
  // Then we find all the tests.
  .then(() => require.context('./', true, /\.spec\.ts/))
  // And load the modules.
  .then(context => context.keys().map(context))
  // Finally, start Karma to run the tests.
  .then(__karma__.start, __karma__.error);

export class TestUtils {

  public static configureIonicTestingModule(components: Array<any>): void {
    TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
      ],
      imports: [
        IonicModule,
      ],
    });
  }

  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
  public static eventFire(el: any, etype: string): void {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      let evObj: any = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
}
