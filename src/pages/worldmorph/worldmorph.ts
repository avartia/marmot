import { Component, ElementRef, ViewChild, NgZone, OnDestroy, AfterViewChecked } from '@angular/core';
import { WorldMorphService} from './services/worldmorph.service'
import { WorldMorph } from './services/worldmorph'
@Component({
  selector: 'page-worldmorph',
  templateUrl: 'worldmorph.html'
})
export class WorldMorphPage implements AfterViewChecked, OnDestroy{

  @ViewChild('myCanvas') canvasRef: ElementRef;
  private isLoop: boolean;
  private world: WorldMorph;
  constructor(private ngZone: NgZone, 
              private worldMorphService: WorldMorphService) {
  
  }
  ngAfterViewChecked() {
    this.isLoop = true;
    this.world = this.worldMorphService.create();
    this.loop();
    this.ngZone.runOutsideAngular(() => this.loop());
  }
  ngOnDestroy() {
    this.isLoop = false;
  }
  private loop() {
    // Check that we're still under loop.
    if (!this.isLoop) {
      return;
    }

    // Schedule next
    requestAnimationFrame(() => this.loop());
    this.world.doOneCycle();
  }

}
