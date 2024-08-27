import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrl: './agregar-editar-persona.component.css'
})
export class AgregarEditarPersonaComponent {

  selectedTipoDocumento: string | undefined;

  estadoAfiliadoarray: String[] = ['Activo', 'Inactivo'
  ];

  constructor(public dialogRef: MatDialogRef <AgregarEditarPersonaComponent>){

  }

  cancelar(){

    console.log(this.selectedTipoDocumento);
    this.dialogRef.close();
    
  }

}
