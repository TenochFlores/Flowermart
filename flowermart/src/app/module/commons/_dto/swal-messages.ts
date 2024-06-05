import Swal from "sweetalert2";

export class SwalMessages {

    confirmMessage: any;

    constructor() {
        this.confirmMessage = Swal.mixin({
            customClass: {
                title: 'swal-title',
                icon: 'swal-icon',
                confirmButton: 'btn btn-secondary swal-confirm-button',
                cancelButton: 'btn btn-danger swal-cancel-button',
            },
            buttonsStyling: false
        });
    }
    
    // show confirmation message
    successMessage(message: string) {
        if (message == "imagen registrada") {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                toast: true,
                text: "Se agregó la imagen al producto exitosamente",
                background: '#E8F8F8',
                showConfirmButton: false,
                timer: 4000
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                toast: true,
                text: message,
                background: '#E8F8F8',
                showConfirmButton: false,
                timer: 4000
            });
        }
    }
   
    // show error message
    errorMessage(message: string) {
        if (message == null) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                toast: true,
                text: "No se pudieron obtener los datos",
                background: '#F8E8F8',
                showConfirmButton: false,
                timer: 4000
            });
        } else if (message == "FORBIDDEN") {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                toast: true,
                text: "Inicia sesión para realizar esta acción",
                background: '#F8E8F8',
                showConfirmButton: false,
                timer: 4000
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                toast: true,
                text: message,
                background: '#F8E8F8',
                showConfirmButton: false,
                timer: 4000
            });
        }
    }
}