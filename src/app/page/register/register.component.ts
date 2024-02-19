import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

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
  constructor(private httpClient:HttpClient){
      this.http = httpClient;
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
  }

}
