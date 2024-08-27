import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


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
    fechaNacimientoAfiliado: new Date("1982-08-17") },
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrl: './list-personas.component.css'
  
})
export class ListPersonasComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['nombreAfiliado', 'apellidoAfiliado', 'cedulaAfiliado', 'estadoAfiliado', 'tipoDocumentoAfiliado', 'fechaNacimientoAfiliado'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(listarAfiliados);
  }
  
  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.dataSource.paginator._intl.itemsPerPageLabel = "Items por página"
      this.dataSource.paginator._intl.nextPageLabel= "Siguiente pág."
      this.dataSource.paginator._intl.previousPageLabel = "Anterior pág."
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

