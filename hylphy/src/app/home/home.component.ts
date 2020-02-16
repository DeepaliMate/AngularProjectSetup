import { SubjectStoreService } from './../../services/subject-store.service';
import { PatientListService } from './../../services/patient-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewPatientComponent } from './new-patient/new-patient.component'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedStatus: number;
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private subjectStoreService: SubjectStoreService, private PatientListService: PatientListService) { }
  patientList;
  //  = [{
  //   "did": "44e864ab-d79c-429b-9f7f-41ae817498ad",
  //   "pid": "5c7b90fe-6316-4a9b-a000-bd14817692af",
  //   "name": "Dorothèe Lemarchand",
  //   "neeLe": "19/03/1978 à Paris",
  //   "address": "12 rue l Espèrance 92160 Antony",
  //   "email": "Dorothèe.Lemarchand@gmail.com",
  //   "maritalStatus": "Marèe, 3 enfants",
  //   "phone": "06 23 24 56 67",
  //   "prdv": "20/04/2020 à 18:30",
  //   "notifications": 0
  // },
  // {
  //   "did": "44e864ab-d79c-429b-9f7f-41ae817498ad",
  //   "pid": "80e9c561-1f80-4b6d-837c-24661901f4dc",
  //   "name": "Mistlav Rostoticsh",
  //   "neeLe": "19/02/1975 à Leyon",
  //   "address": "2 rue Antonio vivaldi 78100 Saint Germain-En-Laye",
  //   "email": "Mistlav.Rostoticsh@gmail.com",
  //   "maritalStatus": "Marèe, 4 enfants",
  //   "phone": "06 13 24 44 93",
  //   "prdv": "20/04/2020 à 19:00",
  //   "notifications": 0
  // }
  // ];

  public ind: number = 0;
  public sectionType: number = 1;
  ngOnInit() {
    this.PatientListService.getPatientList().subscribe((patientList) => {
      console.log("Plist___", patientList);
      this.patientList = patientList;
    });
    this.subjectStoreService.msgCardDetail.next(this.patientList);

  }
  onSelectionChange(selectedVal) {
    console.log("selected val:", selectedVal);
    if (selectedVal === 1)
      this.patientList = this.patientList.reverse();
    console.log(this.patientList.reverse());

  }
  userList = Array(10);
  msgCardList = Array(5);

  public viewMessageCard(index) {
    this.ind = index;
    console.log("indexxx", this.ind);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewPatientComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
