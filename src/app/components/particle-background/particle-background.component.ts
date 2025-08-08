import { Component, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

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

  private numParticles = 100;
  private maxDistance = 120;
  private enableMouse = true;
  private targetFps = 60; // 600 alatt 30-ra tesszük

  @HostListener('window:resize')
  onResize() {
    this.applyResponsiveSettings(true);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.enableMouse) return;
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  @HostListener('window:mouseout')
  onMouseOut() {
    if (!this.enableMouse) return;
    this.mouse.x = null;
    this.mouse.y = null;
  }

  private applyResponsiveSettings(resetParticles: boolean = false) {
    const width = window.innerWidth;

    if (width > 1050) {
      this.numParticles = 100;
      this.maxDistance = 120;
      this.enableMouse = true;
      this.targetFps = 60;
    } else if (width > 600) {
      this.numParticles = Math.floor(100 / 2);
      this.maxDistance = 120 * (2 / 3); // 80
      this.enableMouse = true;
      this.targetFps = 60;
    } else {
      this.numParticles = Math.floor(100 / 5);
      this.maxDistance = 120 * 0.5; // 60
      this.enableMouse = false;      // <-- TELJESEN KI
      this.targetFps = 30;           // <-- FELEZETT FPS
      // fontos: azonnal nullázd, különben "bent maradhat" egy korábbi egérpozíció
      this.mouse.x = null;
      this.mouse.y = null;
    }

    // Képernyőhöz igazítjuk a vásznat
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    if (resetParticles) {
      this.reseedParticles();
    }
  }

  private reseedParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.particlesArray = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
      });
    }
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    this.applyResponsiveSettings(true);

    const connectParticles = () => {
      for (let a = 0; a < this.particlesArray.length; a++) {
        for (let b = a + 1; b < this.particlesArray.length; b++) {
          const dx = this.particlesArray[a].x - this.particlesArray[b].x;
          const dy = this.particlesArray[a].y - this.particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.maxDistance) {
            ctx.strokeStyle = 'rgba(255,255,255,' + (1 - distance / this.maxDistance) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
            ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let last = 0; // FPS-throttle-hoz
    const animate = (now: number = 0) => {
      // FPS limit: 600 alatt 30 FPS, különben 60 FPS
      const minDelta = 1000 / this.targetFps;
      if (now - last < minDelta) {
        requestAnimationFrame(animate);
        return;
      }
      last = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.particlesArray.length; i++) {
        const p = this.particlesArray[i];

        // Egér interakció CSAK ha engedélyezett és van pozíció
        if (this.enableMouse && this.mouse.x !== null && this.mouse.y !== null) {
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
      requestAnimationFrame(animate);
    };

    animate();
  }
}
