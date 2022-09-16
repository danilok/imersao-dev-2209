import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-notas',
  templateUrl: './form-notas.component.html',
  styleUrls: ['./form-notas.component.scss']
})
export class FormNotasComponent implements OnInit {
  public notasForm!: FormGroup;
  public calculado = false;
  public aprovado = false;
  public classeAprovacao = '';
  public media = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.notasForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      primeiro: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      segundo: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      terceiro: [
        0,
        [Validators.required, Validators.max(10), Validators.min(0)]
      ],
      quarto: [0, [Validators.required, Validators.max(10), Validators.min(0)]]
    });
  }

  public calcularMedia(): void {
    const notas = this.notasForm.getRawValue();
    const soma =
      +notas.primeiro + notas.segundo + notas.terceiro + notas.quarto;
    const media = +soma / 4;
    this.aprovado = media >= 6 ? true : false;
    this.classeAprovacao = this.aprovado
      ? 'text-green-800 font-bold'
      : 'text-red-500 font-bold';
    this.media = media.toFixed(2);
    this.calculado = true;
  }

  public resetForm(): void {
    this.calculado = false;
    this.notasForm.reset({
      nome: '',
      primeiro: 0,
      segundo: 0,
      terceiro: 0,
      quarto: 0
    });
  }
}
