import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) {
    this.getData()
  }

  dataHome: any = []
  getData() {
    this.api.baca().subscribe(res => {
      this.dataHome = res
    })
  }


  ngOnInit(): void {
  }

  tambahmenu() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data: null
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData
    });
  }


  editHome(data) {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData // menampilkan data setelah diperbarui
    });
  }

  hapusHome(id) {
    console.log('data dihapus')
    this.api.hapus(id).subscribe(res => {
      this.getData()
    })
  }
}



