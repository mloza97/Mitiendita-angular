import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal: boolean = false;
  private _notificarUpload = new EventEmitter<any>();
  constructor() { }

  abrirModal(){
    this.modal = true;
  }

  get notificarUpload(): EventEmitter<any>{
    return this._notificarUpload;
  }
  cerrarModal(){
    this.modal = false;
  }
}
