import { Component, ElementRef, ViewChild, NgZone, OnInit, OnDestroy } from '@angular/core';

// import { NavController } from 'ionic-angular';
enum Direction{left, right};
@Component({
  selector: 'page-worldmorph',
  templateUrl: 'worldmorph.html'
})
export class WorldMorphPage implements OnInit, OnDestroy{

  @ViewChild('myCanvas') canvasRef: ElementRef;
  private running: boolean;
  private x: number = 10;
  private y: number = 10;
  private direction:Direction = Direction.right; 
  constructor(private ngZone: NgZone) {
  
  }
  ngOnInit() {
    this.running = true;

    this.ngZone.runOutsideAngular(() => this.paint());
  }
  ngOnDestroy() {
    this.running = false;
  }
  private paint() {
    // Check that we're still running.
    if (!this.running) {
      return;
    }

    // Paint current frame
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.rect(0, 0, 500, 500);
    ctx.fill();

    if(this.direction ===  Direction.left){
      this.x--;
    }else if(this.direction === Direction.right){
      this.x++;
    }
    if(this.x > 300 ){
      this.direction = Direction.left;
    }else if(this.x < 10 ){
      this.direction = Direction.right;
    }
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#f00';
    ctx.fill();
    console.log(this.x);
    

    // Schedule next
    requestAnimationFrame(() => this.paint());
  }

}
// export class WorldMorphPage implements OnInit, OnDestroy{

//   @ViewChild('myCanvas') canvasRef: ElementRef;
//   private running: boolean;
//   constructor(private ngZone: NgZone) {

//   }
//   ngOnInit() {
//     this.running = true;
//     this.ngZone.runOutsideAngular(() => this.paint());
//   }
//   ngOnDestroy() {
//     this.running = false;
//   }
//   private paint() {
//     // Check that we're still running.
//     if (!this.running) {
//       return;
//     }

//     // Paint current frame
//     let ctx: CanvasRenderingContext2D =
//       this.canvasRef.nativeElement.getContext('2d');

//     // Draw background (which also effectively clears any previous drawing)
//     ctx.fillStyle = 'rgb(221, 0, 49)';
//     ctx.fillRect(0, 0, 800, 500);


//     // Draw flock
//     ctx.beginPath();
//     ctx.fillStyle = `rgb(255,255,255)`;


//     // Schedule next
//     requestAnimationFrame(() => this.paint());
//   }
// }
