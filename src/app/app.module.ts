import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResolverService } from './resolver.service';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ResolverService], // providedIn: 'root' throws when injecting service in a guard
  bootstrap: [AppComponent],
})
export class AppModule {}
