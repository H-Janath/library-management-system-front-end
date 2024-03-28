import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-book',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-book.component.html',
  styleUrl: './view-all-book.component.css'
})
export class ViewAllBookComponent implements OnInit{
  private http;
  public bookList:any={};
  public selectedBook:any;

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }

  ngOnInit(): void {
      this.LoadBook();
  }

  private LoadBook(){
    this.http.get('http://localhost:8080/api/v1/books').subscribe((data)=>{
      this.bookList=data;
    })
  }


  deleteBook(){
    let api = "http://localhost:8080/api/v1/books"+this.selectedBook.id;
    this.http.delete(api,{responseType:'text'}).subscribe((response:String)=>{
      this.LoadBook();
      this.selectedBook=null;
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    });
    this.LoadBook();
  }  

  setSelectedBook(book:any){
    this.selectedBook=book;
  }

  saveBook(){
    let postApi = "http://localhost:8080/api/v1/books";
    this.http.post(postApi,this.selectedBook).subscribe(data=>{
      console.log("Saved");
      this.LoadBook();
      this.selectedBook=null;
    })
  }
}
