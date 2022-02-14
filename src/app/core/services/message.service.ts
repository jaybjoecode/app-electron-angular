import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  success(title: string, description: string) {
    Swal.fire(title, description, 'success');
  }

  warning(title: string, description: string) {
    Swal.fire(title, description, 'warning');
  }

  info(title: string, description: string) {
    Swal.fire(title, description, 'info');
  }

  error(title: string, description: string) {
    Swal.fire(title || 'Oops...', description || 'Something went wrong!', 'error');
  }

}
