import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { ResolverGuard } from './resolver.guard';

const routes: Routes = [
  {
    path: ':name',
    component: HelloComponent,
    canActivate: [ResolverGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
