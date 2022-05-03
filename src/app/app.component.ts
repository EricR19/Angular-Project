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
  users = ""
  imagePath: string = 'https://img.icons8.com/ios/50/000000/username.png'
  imagePass: string = 'https://img.icons8.com/ios/50/000000/lock-orientation.png'

  constructor(){}
  ngOnInit(){}

   ingresar(parametroUsuario:HTMLInputElement, parametroPass:HTMLInputElement) {
    this.user = parametroUsuario.value
    this.pass = parametroPass.value
    if (this.user != "" && this.pass != "") {
      this.users = "Bienvenido: " +parametroUsuario.value
      parametroUsuario.value =''
      parametroPass.value =''
    }
    else{
      this.users = "Debe ingresar datos"
    }
  } 
}