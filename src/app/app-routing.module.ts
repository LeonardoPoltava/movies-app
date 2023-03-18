import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrancePageComponent} from './entrance-page/entrance-page.component';
import {MovieInnerPageComponent} from './movie-inner-page/movie-inner-page.component';


const routes: Routes = [
    {path: '', component: EntrancePageComponent},
    {path: 'movie/:id', component: MovieInnerPageComponent},
    {path: 'tv/:id', component: MovieInnerPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
