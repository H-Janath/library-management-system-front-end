import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  private http;
  public countryList:any;
  public selectedCountry :any;
  public respond : any;
  constructor(private httpClient:HttpClient){
      this.http = httpClient;
  }
  public Borrower={
    firstname: null,
    lastname: null,
    username : null,
    email : null,
    address1 : null,
    address2 : null,
    country : null,
    phone_no: null
  }



  public addborrower(){
    let api = "http://localhost:8081/barrowers/add";
    this.http.post(api,this.Borrower).subscribe(res=>{
      this.respond = res;
      console.log(this.respond);
    })
  }

  ngOnInit(): void {
    this.loadCountry();
  }

  loadCountry(){
      let api = "https://restcountries.com/v3.1/all";
      this.http.get(api).subscribe(res=>{
        this.countryList = res;
       
      })
  }
  setSelectedCode(country :any){
    this.selectedCountry = country;
    this.Borrower.country=country.continents[0];
  }

}
