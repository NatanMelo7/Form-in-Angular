import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  _name: string = "";
  _email: string = "";
  _msg: string = "";
  _check_status: boolean = false;

  // constructor(name: string, email: string, msg: string){
  //   this._name = name;
  //   this._email = email;
  //   this._msg = msg;
  // }

  onUpdateName(event: Event){
    this._name = (<HTMLInputElement>event.target).value;
  }

  onUpdateEmail(event: Event){
    this._email = (<HTMLInputElement>event.target).value;
  }

  onUpdateMsg(event: Event){
    this._msg = (<HTMLInputElement>event.target).value;
  }

  setCheckStatus(status: boolean){
    this._check_status = status;
  }

  getCheckStatus(){
    return this._check_status;
  }

  getName(){
    return this._name;
  }

  getEmail(){
    return this._email;
  }

  getMsg(){
    return this._msg;
  }

  getDataForm(){
    this.setCheckStatus(true);
  }

  toString(){
    return this.getName() + " - " + this.getEmail() + " - " + this.getMsg();
  }
}
