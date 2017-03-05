import { Component, ElementRef, ViewChild, NgZone, OnInit, OnDestroy } from '@angular/core';
import { WorldMorphService} from './services/worldmorph.service'
import { WorldMorph } from './services/worldmorph'
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html'
})
export class CanvasPage implements OnDestroy, OnInit{

  @ViewChild('myCanvas') canvasRef: ElementRef;
  private isLoop: boolean;
  private world: WorldMorph;
  constructor(private ngZone: NgZone, 
              private worldMorphService: WorldMorphService) {
  
  }
  ngOnInit(){
      this.isLoop = true;
      this.world = this.worldMorphService.create(this.canvasRef.nativeElement);
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
