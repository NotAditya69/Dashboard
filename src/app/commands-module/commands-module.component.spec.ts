import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsModuleComponent } from './commands-module.component';

describe('CommandsModuleComponent', () => {
  let component: CommandsModuleComponent;
  let fixture: ComponentFixture<CommandsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});