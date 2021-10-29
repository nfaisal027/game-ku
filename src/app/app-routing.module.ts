import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFourComponent } from './page-four/page-four.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {path:'page-one',component: PageOneComponent},
  {path:'page-two',component: PageTwoComponent},
  {path:'page-three',component: PageThreeComponent},
  {path:'page-four',component: PageFourComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
