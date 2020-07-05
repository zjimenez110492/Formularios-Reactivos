import { Component, OnInit } from '@angular/core';
import{FormControl, Validators} from '@angular/forms'
import { debounceTime, debounce } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
emailCtrl= new FormControl('',[Validators.required, Validators.maxLength(20), Validators.minLength(11)]);
  constructor() { 
    this.emailCtrl.valueChanges.pipe(
    debounceTime(350)
    ).subscribe(
      value=>{
        console.log(value);
        
      }
    )
    
  }
  ngOnInit() {
  }
  getEmail(event:Event)
  {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

}
