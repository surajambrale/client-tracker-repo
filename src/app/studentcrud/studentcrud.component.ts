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
  trainingStartDate: string = '';
  trainingEndDate: string = '';
  trainingCost: number = 0;
  paymentDone: number = 0;
  balance: number = 0;
  notes: string = '';
  isEdit: boolean = false;
  currentStudentId: string = '';

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get("https://client-tracker-repo.onrender.com/user/getAll")
      .subscribe((resultData: any) => {
        console.log("Student data received:", resultData);
        this.StudentArray = resultData;
      });
  }

  register() {
    const bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
      trainingStartDate: this.trainingStartDate,
      trainingEndDate: this.trainingEndDate,
      trainingCost: this.trainingCost,
      paymentDone: this.paymentDone,
      balance: this.balance,
      notes: this.notes
    };

    if (this.isEdit) {
      this.http.put(`https://client-tracker-repo.onrender.com/user/update/${this.currentStudentId}`, bodyData)
        .subscribe(() => {
          alert("Client updated successfully");
          this.clearForm();
          this.getAllStudent();
        });
    } else {
      this.http.post("https://client-tracker-repo.onrender.com/user/create", bodyData)
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
    this.trainingStartDate = student.trainingStartDate;
    this.trainingEndDate = student.trainingEndDate;
    this.trainingCost = student.trainingCost;
    this.paymentDone = student.paymentDone;
    this.balance = student.balance;
    this.notes = student.notes;
    this.currentStudentId = student._id;
    this.isEdit = true;
  }

  deleteStudent(id: string) {
    if (confirm("Are you sure you want to delete this client?")) {
      this.http.delete(`https://client-tracker-repo.onrender.com/user/remove/${id}`)
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
    this.trainingStartDate = '';
    this.trainingEndDate = '';
    this.trainingCost = 0;
    this.paymentDone = 0;
    this.balance = 0;
    this.notes = '';
    this.isEdit = false;
    this.currentStudentId = '';
  }
}
