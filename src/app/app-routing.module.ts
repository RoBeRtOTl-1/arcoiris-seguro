import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContentComponent } from '../../projects/componentes/src/lib/components/layout-content-component/layout-content.component';

const routes: Routes = [
  { path:'',
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: LayoutContentComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
