import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  defaultSubscription: string = "advanced";
  @ViewChild("f") signUpForm: NgForm;
  @ViewChild("email") emailValue;
  submitted: boolean = false;
  user: { email: string; subscription: string; password: string } = {
    email: "",
    subscription: "",
    password: "",
  };
  onSubmit() {
    console.log("email", this.emailValue.value);
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.email = this.signUpForm.value.email;
    this.user.subscription = this.signUpForm.value.subscription;
    this.user.password = this.signUpForm.value.password;
    this.signUpForm.reset();
  }
}
