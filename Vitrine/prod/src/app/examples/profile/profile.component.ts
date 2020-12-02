import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    data: Date = new Date();
    focus;
    focus1;
    hist;

    constructor(private http: HttpClient) {}

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
      console.log(this.getHistorique());
        document.getElementById('birds').innerHTML = String(this.getHistorique().data.length);
        document.getElementById('users').innerHTML = String(this.getCapteurs(this.getHistorique().data));
        document.getElementById('lastBird').innerHTML = this.getLastBird(this.getHistorique().data[this.getHistorique().data.length-1]);
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    getHistorique() {
     // return this.http.get('https://menura.be:3000/v1/api/historiques/all');
       return {"success":1,"data":[{"idhistoriques":137,"oiseau":"Mésange bleue","date":"2020-09-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":136,"oiseau":"Mésange bleue","date":"2020-09-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":138,"oiseau":"Pic vert","date":"2020-09-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":132,"oiseau":"Buse variable","date":"2020-10-03T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":133,"oiseau":"Buse variable","date":"2020-10-05T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":131,"oiseau":"Buse variable","date":"2020-10-11T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":80,"oiseau":"Chardonneret élégant","date":"2020-11-19T00:00:00.000Z","localisation":"Belgium Wallonia Gembloux","capteur":"f8:ff:c2:28:db:24"},{"idhistoriques":79,"oiseau":"Mésange bleue","date":"2020-11-19T00:00:00.000Z","localisation":"Belgium Wallonia Gembloux","capteur":"f8:ff:c2:28:db:24"},{"idhistoriques":121,"oiseau":"Bergeronnette grise","date":"2020-11-21T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":114,"oiseau":"Bruant Jaune","date":"2020-11-21T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":108,"oiseau":"Mésange bleue","date":"2020-11-21T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":109,"oiseau":"Mésange bleue","date":"2020-11-21T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":110,"oiseau":"Mésange bleue","date":"2020-11-21T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":122,"oiseau":"Bergeronnette grise","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":115,"oiseau":"Bruant Jaune","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":116,"oiseau":"Bruant Jaune","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":117,"oiseau":"Bruant Jaune","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":111,"oiseau":"Mésange bleue","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":119,"oiseau":"Pic vert","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":120,"oiseau":"Pic vert","date":"2020-11-22T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":112,"oiseau":"Mésange bleue","date":"2020-11-23T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":96,"oiseau":"Mésange bleue","date":"2020-11-23T00:00:00.000Z","localisation":"Belgium Wallonia Gembloux","capteur":"f8:ff:c2:28:db:24"},{"idhistoriques":130,"oiseau":"Bergeronnette grise","date":"2020-11-25T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":129,"oiseau":"Bergeronnette grise","date":"2020-11-25T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":77,"oiseau":"Bruant Jaune","date":"2020-11-25T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":113,"oiseau":"Mésange bleue","date":"2020-11-25T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":76,"oiseau":"Bruant Jaune","date":"2020-11-26T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":118,"oiseau":"Bruant Jaune","date":"2020-11-27T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":83,"oiseau":"Mésange bleue","date":"2020-11-27T00:00:00.000Z","localisation":"Wavre","capteur":"GG:GG:GG:GG:GG:GG"},{"idhistoriques":73,"oiseau":"Bruant Jaune","date":"2020-11-28T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":74,"oiseau":"Bruant Jaune","date":"2020-11-28T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":75,"oiseau":"Bruant Jaune","date":"2020-11-29T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":124,"oiseau":"Pic vert","date":"2020-11-29T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":126,"oiseau":"Mésange bleue","date":"2020-11-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":125,"oiseau":"Pic vert","date":"2020-11-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":123,"oiseau":"Pic vert","date":"2020-11-30T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":134,"oiseau":"Mésange bleue","date":"2020-12-03T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"},{"idhistoriques":135,"oiseau":"Mésange bleue","date":"2020-12-03T00:00:00.000Z","localisation":"Milan","capteur":"FF:FF:FF:FF:FF:FF"}]};
    }

    getCapteurs(data) {
      let tab = []
      for (let i = 0; i < data.length; i++) {
        tab[i] = data[i].capteur;
      }
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      }
      return tab.filter(unique).length;
    }

    getLastBird(bird) {
      return '<p>' + bird.oiseau + ' le ' + bird.date.slice(0, 10) + ' à ' + bird.localisation + '</p>';
    }

}
