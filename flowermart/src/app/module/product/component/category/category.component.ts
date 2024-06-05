import { Category } from '../../_model/category/category';
import { CategoryService } from '../../_service/category.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PagingConfig } from '../../../commons/_models/paging-config';
import { SwalMessages } from '../../../commons/_dto/swal-messages';

declare var $: any; // JQuery

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  categories: Category[] = []; // Category List

  categoryToUpdate: number = 0; // Category id to update

  page: number | Event = 1;

  // Category form
  form = this.formBuilder.group({
    category: ["", [Validators.required]],
    acronym: ["", [Validators.required]],
  });

  submitted = false; // Form submitted

  swal: SwalMessages = new SwalMessages(); // Swal messages

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  currentPage: number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  pageConfig: PagingConfig = {} as PagingConfig;

  ngOnInit() {
    this.getCategories();
    
    this.pageConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  onSubmit() {
    // validate form
    this.submitted = true;
    if (this.form.invalid) return;
    this.submitted = false;

    // validate categoryToUpdate
    if (this.categoryToUpdate == 0) {
      this.onSubmitCreate();
    } else {
      this.onSubmitUpdate();
    }
  }

  onSubmitCreate() {
    // add category to category list
    this.categoryService.createCategory(this.form.value).subscribe({
      next: (v) => {
        this.swal.successMessage(v.body!.message); // show message
        this.getCategories(); // reload categories
        this.hideModalForm(); // close modal
      },
      error: (e) => {
        console.error(e);
        this.swal.errorMessage(e.error!.message); // show message
      }
    });
  }

  onSubmitUpdate() {
    // add category to category list
    this.categoryService.updateCategory(this.form.value, this.categoryToUpdate).subscribe({
      next: (v) => {
        this.swal.successMessage(v.body!.message); // show message
        this.getCategories(); // reload categories
        this.hideModalForm(); // close modal
      },
      error: (e) => {
        console.error(e);
        this.swal.errorMessage(e.error!.message); // show message
      }
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (v) => {
        this.categories = v.body!
      },
      error: (e) => {
        console.log(e);
        this.swal.errorMessage(e.error!.message); // show message
      }
    });
  }

  updateCategory(category: Category) {
    this.categoryToUpdate = category.category_id;
   
    this.form.reset();
    this.form.controls['category'].setValue(category.category);
    this.form.controls['acronym'].setValue(category.acronym);
   
    this.submitted = false;
    $("#modalForm").modal("show");
  }

  disableCategory(category_id: number) {
    this.swal.confirmMessage.fire({
      title: 'Favor de confirmar la desactivación de la categoría',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.categoryService.disableCategory(category_id).subscribe({
          next: (v) => {
            this.swal.successMessage(v.body!.message); // show message
            this.getCategories(); // reload categories
          },
          error: (e) => {
            console.error(e);
            this.swal.errorMessage(e.error!.message); // show message
          }
        });
      }
    });
  }

  enableCategory(category_id: number) {
    this.swal.confirmMessage.fire({
      title: 'Favor de confirmar la activación de la categoría',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.categoryService.enableCategory(category_id).subscribe({
          next: (v) => {
            this.swal.successMessage(v.body!.message); // show message
            this.getCategories(); // reload categories
          },
          error: (e) => {
            console.error(e);
            this.swal.errorMessage(e.error!.message); // show message
          }
        });
      }
    });
  }

  showModalForm() {
    this.form.reset();
    this.categoryToUpdate = 0; // reset categoryToUpdate
    this.submitted = false;
    $("#modalForm").modal("show");
  }

  hideModalForm() {
    $("#modalForm").modal("hide");
  }
}