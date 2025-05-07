import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentcrud',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './studentcrud.component.html',
  styleUrls: ['./studentcrud.component.scss']
})
export class StudentcrudComponent {
  StudentArray: any[] = [];
  name: string = '';
  address: string = '';
  phone: string = '';
  isEdit: boolean = false;
  currentStudentId: string = '';

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get("http://localhost:8000/user/getAll").subscribe((resultData: any) => {
      console.log("Student data received:", resultData); // ADD THIS
      this.StudentArray = resultData;
    });
  }

  register() {
    const bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    if (this.isEdit) {
      this.http.put(`http://localhost:8000/user/update/${this.currentStudentId}`, bodyData)
        .subscribe(() => {
          alert("Client updated successfully");
          this.clearForm();
          this.getAllStudent();
        });
    } else {
      this.http.post("http://localhost:8000/user/create", bodyData)
        .subscribe(() => {
          alert("Client added successfully");
          this.clearForm();
          this.getAllStudent();
        });
    }
  }

  editStudent(student: any) {
    this.name = student.name;
    this.address = student.address;
    this.phone = student.phone;
    this.currentStudentId = student._id;
    this.isEdit = true;
  }

  deleteStudent(id: string) {
    if (confirm("Are you sure you want to delete this client?")) {
      this.http.delete(`http://localhost:8000/user/remove/${id}`)
        .subscribe(() => {
          alert("Client deleted successfully");
          this.getAllStudent();
        });
    }
  }

  clearForm() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.isEdit = false;
    this.currentStudentId = '';
  }
}
