import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.scss']
})
export class FormMensagemComponent implements OnInit {
  @Input() mensagem = '';
  constructor() {}

  ngOnInit(): void {}
}
