import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUrlPipe} from "./image-url.pipe";
import {TrackByPipe} from "./track-by.pipe";

@NgModule({
  declarations: [ImageUrlPipe, TrackByPipe],
  imports: [
    CommonModule
  ],
  exports: [ImageUrlPipe, TrackByPipe],
})
export class PipesModule { }
