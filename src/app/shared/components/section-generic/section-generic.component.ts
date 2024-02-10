import { Component, Input, OnInit, Output } from '@angular/core';
import { TrackModel } from '@core//models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  @Input() title: string = '' //decorador llamado Input que permite la comunicacion entre ellos, enviando del hijo al padre
  @Input() mode : 'small' | 'big' =  'big';
  @Input() dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
