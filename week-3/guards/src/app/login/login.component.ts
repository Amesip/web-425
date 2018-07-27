import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1 class="home">The Panda Wookee logs in here!</h1>
  <div class="wrapper">
    <form class="form-signin">       
      <h2 class="form-signin-heading">Login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>      
      <button class="btn btn-lg btn-warning btn-block" type="submit">Login</button>   
    </form>
  </div>
`,
styles: [`
  .home { background-color: green; }
`]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
