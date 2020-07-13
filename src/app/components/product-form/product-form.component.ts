import { Component, OnInit } from '@angular/core';
import{FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms'
import { debounceTime, debounce } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  form: FormGroup;
  tamText=0;
  constructor(private FormBuilder:FormBuilder) { 
    this.buildForm();
  }
  ngOnInit() {
  }
  private buildForm() {
    this.form= this.FormBuilder.group({
      name:['',[Validators.required]],
      date:['',[Validators.required]],
      email:['',[Validators.email]],
      text:['',[Validators.maxLength(200),Validators.required],],      
      category:['',[Validators.required]],      
      gender:['',[Validators.required]]  
    });

    
    /* Builder con new
    this.form= new FormGroup({
      name:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email]),
      text:new FormControl('',[Validators.maxLength(200)]),      
      category:new FormControl('',[Validators.required]),      
      gender:new FormControl('',[Validators.required])  
    }); */
    this.form.valueChanges.pipe(
      debounceTime(350)
      ).subscribe(
        value=>{
          console.log(value);
          console.log("El formulario es valido?:  "+this.form.valid);
          let text=this.form.controls['text'].value;
          this.tamText=text.length;
        }
      )
  }
 /*  getEmail(event:Event)
  {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }
 */
  save(event:Event)
  {
    event.preventDefault(); //se Cancela su comportamiento por defecto, evitando que se recargue la pagina
    if(this.form.valid)
    {
      const value= this.form.value;
      console.log(value);  
    }
    else this.form.markAllAsTouched();
    }
    getNameField()
    {
      this.form.get('name');
    }
    getDateField()
    {
      this.form.get('date');
    }
    getEmailField()
    {
      this.form.get('email');
    }
    getTextField()
    {
      this.form.get('text');
    }
    getCategoryField()
    {
      this.form.get('category');
    }
    getGenderField()
    {
      this.form.get('gender');
    }
}
