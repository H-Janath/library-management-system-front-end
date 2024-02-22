import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-barrowers',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './view-all-barrowers.component.html',
  styleUrl: './view-all-barrowers.component.css'
})

export class ViewAllBarrowersComponent  implements OnInit{

  private http;
  public barrowersList:any={};
  public selectedBarrowe:any;
  
  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }

  ngOnInit(): void {
    this.LoadBarrowers();
  }

  selectBarrower(barrower: any){
    console.log(barrower.bid);
      this.selectedBarrowe = barrower;
  }

  private LoadBarrowers(){
    this.http.get('http://localhost:8081/barrowers/get').subscribe((data)=>{
      console.log(data);
      this.barrowersList=data;
    })
  }

  public deleteBarrower(){
    let api = "http://localhost:8081/barrowers/delete"+this.selectedBarrowe.bid;
      this.http.delete(api).subscribe((data)=>{
          this.LoadBarrowers();
      })
  }

  public saveBarrower(){

  }
  

}
