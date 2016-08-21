import { Component } from '@angular/core';
import {WikiComponent} from './wikipedia.component';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
@Component({
    selector: 'my-app',
    template: `<div class="fullscreen nopadding">
  <div id="header">
    <img src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png" width="50px" />
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </div>
  <div class="header">
    <h1>withcenter online spelling dictionary</h1>
  </div>
</div>



<div class="white">
  <a id="test"></a>
  <h1>TO DO</h1>
  <img class="floatright" src="http://www.2020site.org/trees/images/PineNeedles.jpg" />
  <my-wiki></my-wiki>

<br>

  

</div>



<div class="dark">
  <p>with http client and unit testing jasmine karma</p>
</div>
    `
})
export class AppComponent { }
