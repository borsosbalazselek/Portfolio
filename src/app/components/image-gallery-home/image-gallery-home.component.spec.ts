import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryHomeComponent } from './image-gallery-home.component';

describe('ImageGalleryHomeComponent', () => {
  let component: ImageGalleryHomeComponent;
  let fixture: ComponentFixture<ImageGalleryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageGalleryHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
