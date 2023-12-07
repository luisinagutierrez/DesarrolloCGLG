import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-list-categories',
  templateUrl: './edit-list-categories.component.html',
  styleUrls: ['./edit-list-categories.component.scss']
})
export class EditListCategoriesComponent {
  categories: any[] = [];
  
    constructor(
      private categoryService: CategoryService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.categoryService.findAll().subscribe((data: any) => {
      console.log(data);
      this.categories = data.data;  });
      }
  
    delete(id: string) {
      console.log(id);
      Swal.fire({
        title: 'Desea eliminar la categoría',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e7c633',
        cancelButtonColor: '#f76666',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.categoryService.delete(id)
          .subscribe({
            next: res => {
              Swal.fire(
                'Confirmado',
                'La acción ha sido confirmada',
                'success'
              );
              this.router.navigate(['/AdminCategories']);
              this.categories = this.categories.filter(category => category.id !== id); // lo tuve que agregar para que se actualice la página y no quede el prodcuto que ya había eliminado hasta que se recargue 
            },
            error: err => {
              console.log(err);
            }
          });
        }
      });
    }

edit(category: any): void {
  category.editName = category.name;
  category.editDescription = category.description;
  category.editing = true;
}

save(category: any): void {
  if (!category.editName || !category.editDescription) { 
    Swal.fire({
      icon: 'error',
      title: 'Error en el registro',
      text: 'Debe completar todos los campos.',
    });
  } else {   
    if (category.editName !== category.name || category.editDescription !== category.description) {
      category.editName = category.editName.toLowerCase();
      this.categoryService.findCategoryByName(category.editName)
      .subscribe(
        (existingCategory: any) => {
          if (existingCategory === null || category.name === category.editName ) {
          category.name = category.editName;
          category.description = category.editDescription;
          this.categoryService.update(category).subscribe(
          (response: any) => {
            console.log(response);
            Swal.fire(
            'Categoría registrada con éxito!!',
            '',
            'success'
            );
            category.editing = false;
          },
          (err: any) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Registro fallido',
              text: err.message,
              });
            }
          );
     
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre ya está registrado',
              });
            }      
          },
          (err: any) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error en la verificación del nombre.',
            });
          }
        );
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Sin cambios',
        text: 'No se realizaron cambios en la categoría.',
      });
    }
  }
}
}
  
  
  
   
