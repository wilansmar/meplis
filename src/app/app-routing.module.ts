import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestJsComponent } from './test-js/test-js.component';
import { TestUiComponent } from './test-ui/test-ui.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'testeJs', component: TestJsComponent},
  {path: 'testeUi', component: TestUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
