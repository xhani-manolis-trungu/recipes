/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalComponentComponent } from './modal-component.component';

describe('ModalComponentComponent', () => {
  let component: ModalComponentComponent;
  let fixture: ComponentFixture<ModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle modal', () => {
    component.modalTarget = null;
    component.toggleModal();
    expect(component.modalTarget).toEqual('default-modal');
    component.toggleModal();
    expect(component.modalTarget).toEqual(null);
  });

  it('should emit isModalOpen event when toggleModal is called', () => {
    const emitSpy = jest.spyOn(component.isModalOpen, 'emit');
    component.toggleModal();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should initialize modalTarget as null by default', () => {
    expect(component.modalTarget).toBeNull();
  });

  it('should not emit isModalOpen event if modalTarget is not toggled', () => {
    const emitSpy = jest.spyOn(component.isModalOpen, 'emit');
    component.isModalOpen.subscribe(() => {
      fail('isModalOpen event should not have been emitted');
    });
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should emit isModalOpen event with correct value when toggleModal is called', () => {
    const emitSpy = jest.spyOn(component.isModalOpen, 'emit');
    component.toggleModal();
    expect(emitSpy).toHaveBeenCalledWith();
  });
});
