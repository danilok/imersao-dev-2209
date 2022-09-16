import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-conversor-moeda',
  templateUrl: './form-conversor-moeda.component.html',
  styleUrls: ['./form-conversor-moeda.component.scss']
})
export class FormConversorMoedaComponent implements OnInit {
  public conversorForm!: FormGroup;
  public resultado = '';
  constructor(
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.conversorForm = this.formBuilder.group({
      valor: [0, [Validators.required]]
    });
  }

  converter(): void {
    console.log('vamos calcular');
    this.resultado = 'convertido';
    const { valor } = this.conversorForm.getRawValue();
    const convertido = (parseFloat(valor) * 5).toFixed(2);
    this.resultado = `O valor em reais é R$ ${this.currencyPipe.transform(
      convertido
    )}.`;
  }

  resetForm(): void {
    this.conversorForm.reset();
    this.resultado = '';
  }
}
