import { SuekaRegrasComponent } from './components/sueka/sueka-regras/sueka-regras.component';
import { SuekaHomeComponent } from './components/sueka/sueka-home/sueka-home.component';
import { HomeComponent } from './components/home/home.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sueka',
    component: SuekaHomeComponent
  },{
    path: 'regras',
    component: SuekaRegrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
