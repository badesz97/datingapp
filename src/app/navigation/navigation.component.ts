import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  model: any = {}

  constructor(public accountService: AccountService, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  nothing(){}

  login(){
    this.accountService.login(this.model).subscribe(resp => {
      if (resp.token!=null) {
        this.router.navigateByUrl('/members');
        this.toastr.success("Sikeres belépés")
        console.log(resp);
      }
      else {
        this.router.navigateByUrl('/');
        this.toastr.error("Sikertelen belépés")
      }
    }, error => {
      console.log(error)
      this.toastr.error("Something went wrong.")
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
