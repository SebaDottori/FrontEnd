import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ProyectoImgService } from 'src/app/service/proyectoimg.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto: Proyecto = null;

  constructor(private activatedRoute: ActivatedRoute, private sProyecto: ProyectoService, private router: Router, public proyectoImgService: ProyectoImgService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadProyectoImg($event:any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyecto_" + this.proyecto.nombre;
    this.proyectoImgService.uploadImage($event, name)
  }
}
