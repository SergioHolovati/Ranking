import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ResumeComponent } from './pages/resume/resume/resume.component';
import { PlayersComponent } from './pages/players/players/players.component';
import { MatchesComponent } from './pages/matches/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TabsComponent } from './shared/tabs/tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/playerform/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogFormPlayer } from './shared/modal/playerform/dialogformplayer.component';
import { DialogFormMatch } from './shared/modal/matchform/dialogformmatch.component';
import { ModalMatchComponent } from './shared/modal/matchform/modalMatch.component';
import { MatSelectModule } from '@angular/material/select';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    PlayersComponent,
    MatchesComponent,
    TabsComponent,
    ModalComponent,
    DialogFormPlayer,
    DialogFormMatch,
    ModalMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
