import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorCardComponent } from './content-creator-card.component';

describe('ContentCreatorCardComponent', () => {
  let component: ContentCreatorCardComponent;
  let fixture: ComponentFixture<ContentCreatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCreatorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
