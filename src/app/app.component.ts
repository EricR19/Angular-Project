import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RegistroDeNotass';
  user = ""
  pass = ""
  constructor(){}
  ngOnInit(){}

   ingresar(parametroUsuario:HTMLInputElement, parametroPass:HTMLInputElement) {
    this.user = parametroUsuario.value
    this.pass = parametroPass.value
    if (this.user != "" && this.pass != "") {
      alert("Bienvenido al sistema")
      parametroUsuario.value =''
      parametroPass.value =''
    }
    else{
      alert('Debe ingresar los valores indicados')
    }
  } 
}