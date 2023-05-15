import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ProyectoImgService } from 'src/app/service/proyectoimg.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombre: string;
  descripcion: string;
  link: string;
  img: string;

  constructor(private activatedRoute: ActivatedRoute, private sProyecto: ProyectoService, private router: Router, public proyectoImgService: ProyectoImgService) {}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.link, this.proyectoImgService.url);
    this.sProyecto.save(proyecto).subscribe(
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
    const name = "proyecto_" + this.nombre;
    this.proyectoImgService.uploadImage($event, name)
  }

}
