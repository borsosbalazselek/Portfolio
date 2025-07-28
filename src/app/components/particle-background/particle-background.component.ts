import { Component, ElementRef, AfterViewInit,ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-particle-background',
  standalone: false,
  templateUrl: './particle-background.component.html',
  styleUrl: './particle-background.component.css'
})
export class ParticleBackgroundComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private mouse = { x: null as number | null, y: null as number | null };
  private particlesArray: any[] = [];
  
  @HostListener('window:mousemove', ['$event']) // ⬅ nem csak saját elemre
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
@HostListener('window:mouseout')
onMouseOut() {
  this.mouse.x = null;
  this.mouse.y = null;
}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      this.particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
      });
    }

    const connectParticles = () => {
      for (let a = 0; a < this.particlesArray.length; a++) {
        for (let b = a + 1; b < this.particlesArray.length; b++) {
          const dx = this.particlesArray[a].x - this.particlesArray[b].x;
          const dy = this.particlesArray[a].y - this.particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = 'rgba(255,255,255,' + (1 - distance / 120) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
            ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.particlesArray.length; i++) {
        const p = this.particlesArray[i];

        // Interakció az egérrel – vonzás
        if (this.mouse.x && this.mouse.y) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x += dx / dist;
            p.y += dy / dist;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }

      connectParticles();
      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }
}