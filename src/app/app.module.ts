import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { AppStore, createAppStoreFactoryWithOptions } from 'angular2-redux';
import { CounterActions } from '../actions/counter.actions';
import reducers from '../reducers/app.reducer';


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
})();

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
      {
          provide: AppStore,
          useValue: appStoreFactory
      },
      CounterActions
  ]
})
export class AppModule {}
