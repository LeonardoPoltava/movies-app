import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUrlPipe} from "./image-url.pipe";
import {TrackByPipe} from "./track-by.pipe";
import { FixedPipe } from './fixed.pipe';

@NgModule({
  declarations: [ImageUrlPipe, TrackByPipe, FixedPipe],
  imports: [
    CommonModule
  ],
  exports: [ImageUrlPipe, TrackByPipe, FixedPipe],
})
export class PipesModule { }
