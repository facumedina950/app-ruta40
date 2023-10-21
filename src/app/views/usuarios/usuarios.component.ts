import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any[] = []
  usuarioGuardar = {
    id:'11',
    name:'facundo',
    username:'vip',
    email:'facutuc11@hotmail.com',
    addressStreet:'Las Heras',
    addressSuite:'950',
    addressCity:'San Miguel de Tucumán',
    zipcode:'4000',
    geoLat:'-54.5467',
    geoLNG:'81.1496',
    phone:'381-5092815',
    websiite:'facumedina.com',
    companyName:'medina-inc',
    companyCatchphrase:'Multi-Layer - Server',
    companyBs:'harnees real - time'
  }
 
 constructor (private usuariosService:UsuariosService){}

 ngOnInit(){
   this.usuariosService.getUsuarios().subscribe({
    next: (respuesta)=>{
       console.log (respuesta)
       this.usuarios = respuesta
    }
   })
 }

guardarUsuario(){
  this.usuariosService.guardarUsuarios(this.usuarioGuardar).subscribe({
    next: (respuesta)=>{
        console.log (respuesta)
        
    }
   })
 }

}
