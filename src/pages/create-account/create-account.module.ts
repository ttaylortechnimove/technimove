import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CreateAccountPage } from "./create-account";
import { CreateAccountRoutingModule } from "./create-account.routing";

@NgModule({
    declarations: [ CreateAccountPage ],
    imports: [ BrowserModule, FormsModule, CreateAccountRoutingModule]
})

export class CreateAccountModule {}