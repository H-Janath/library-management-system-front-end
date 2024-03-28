import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-register',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './book-register.component.html',
  styleUrl: './book-register.component.css'
})
export class BookRegisterComponent{
  private http;
  public response : any;
  constructor(private httpClient: HttpClient){
    this.http=httpClient;
  }
  public Book={
    title : null,
    bookId: null,
    author: null,
    category: null,
    isbn : null,
    quantity : null
  }

  addBookId() {
    let api = "http://localhost:8080/api/v1/books"
    this.http.post(api,this.Book).subscribe(res=>{
        this.response = res;
        console.log(this.response);
    })
  }

}
