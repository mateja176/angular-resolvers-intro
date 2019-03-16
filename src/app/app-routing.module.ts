import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { HnResolver } from './hn.resolver';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    resolve: { message: HnResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
