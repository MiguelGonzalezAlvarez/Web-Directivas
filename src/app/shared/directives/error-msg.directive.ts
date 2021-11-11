import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _mensaje: string = 'Este campo es requerido';
  private _color: string = 'red';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor: boolean) {
    // Este htmlElement es nuestra directiva en si misma y al añadir la clase hidden la ocultamos en el padre
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private myElement: ElementRef<HTMLElement>) {
    // Inicializamos el htmlElement con la referencia de nuestra directiva por lo que nuestra directiva en si misma
    // sera el html que se vera relacionado a ese elementRef
    this.htmlElement = myElement;
  }

  ngOnInit(): void {
    this.setMensaje();
    this.setColor();
    this.setEstilo();
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
