import { Component } from '@angular/core';
import { Persona } from '../../interfaces/persona';


const listarAfiliados: Persona[] = [
  { nombreAfiliado: "Laura", 
    apellidoAfiliado: "García", 
    cedulaAfiliado: 1098765432, 
    estadoAfiliado: "Activo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1990-04-15") },
  
  { nombreAfiliado: "Carlos", 
    apellidoAfiliado: "Pérez", 
    cedulaAfiliado: 1045678901, 
    estadoAfiliado: "Inactivo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1985-02-20") },
  
  { nombreAfiliado: "Andrea", 
    apellidoAfiliado: "Martínez", 
    cedulaAfiliado: 1122334455, 
    estadoAfiliado: "Activo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1995-07-10") },
  
  { nombreAfiliado: "Javier", 
    apellidoAfiliado: "López", 
    cedulaAfiliado: 1023456789, 
    estadoAfiliado: "Activo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1988-11-05") },
  
  { nombreAfiliado: "María", 
    apellidoAfiliado: "Ramírez", 
    cedulaAfiliado: 1109876543, 
    estadoAfiliado: "Inactivo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1992-09-22") },
  
  { nombreAfiliado: "Santiago", 
    apellidoAfiliado: "Torres", 
    cedulaAfiliado: 1087654321, 
    estadoAfiliado: "Activo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1980-01-30") },
  
  { nombreAfiliado: "Diana", 
    apellidoAfiliado: "Hernández", 
    cedulaAfiliado: 1065432109, 
    estadoAfiliado: "Inactivo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1993-06-12") },
  
  { nombreAfiliado: "Luis", 
    apellidoAfiliado: "Gómez", 
    cedulaAfiliado: 1012345678, 
    estadoAfiliado: "Activo", 
    tipoDocumentoAfiliado: "C.C.", 
    fechaNacimientoAfiliado: new Date("1982-08-17") }
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrl: './list-personas.component.css'
})
export class ListPersonasComponent {

  displayedColumns: string[] = ['nombreAfiliado', 'apellidoAfiliado', 'cedulaAfiliado', 'estadoAfiliado', 'tipoDocumentoAfiliado', 'fechaNacimientoAfiliado'];
  dataSource = listarAfiliados;

}
