import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrymoduleComponent } from './entrymodule.component';

describe('EntrymoduleComponent', () => {
  let component: EntrymoduleComponent;
  let fixture: ComponentFixture<EntrymoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrymoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
