import {
  Injectable,
  Renderer2,
  ElementRef,
  RendererFactory2
} from '@angular/core';

interface Style {
  name: string;
  value: string;
}

type Styles = Array<Style>;

@Injectable({
  providedIn: 'root'
})
export class AppStylingService {
  /** Reference to render-instance */
  public renderer: Renderer2;
  /** CONSTRUCTOR */
  constructor(private _renderer: RendererFactory2) {
    this.renderer = _renderer.createRenderer(null, null);
  }

  setStyles(el: ElementRef, styles: Styles): void {
    styles.forEach((style) => {
      this.renderer.setStyle(
        el.nativeElement.ownerDocument.body,
        style.name,
        style.value
      );
    });
  }

  removeStyles(el: ElementRef, names: string[]): void {
    names.forEach((name) => {
      this.renderer.removeStyle(el.nativeElement.ownerDocument.body, name);
    });
  }
}
