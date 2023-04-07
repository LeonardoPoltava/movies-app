import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrancePageComponent} from './movie/pages/entrance-page/entrance-page.component';
import {MovieInnerPageComponent} from './movie/pages/movie-inner-page/movie-inner-page.component';
import {PeopleInnerPageComponent} from "./people/pages/people-inner-page/people-inner-page.component";
import {MoviesPageComponent} from "./movie/pages/movies-page/movies-page.component";


const routes: Routes = [
    {path: '', component: EntrancePageComponent, pathMatch: 'full'},
    {path: 'movie/:id', component: MovieInnerPageComponent},
    {path: 'tv/:id', component: MovieInnerPageComponent},
    {path: 'people/:id', component: PeopleInnerPageComponent},
    {path: 'movies', component: MoviesPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
