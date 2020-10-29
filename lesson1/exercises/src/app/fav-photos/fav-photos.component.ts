import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are my favorite photos!';
  image1 = 'https://rlv.zcache.com/lazer_warrior_space_cat_riding_panda_with_taco_poster-r4cba1dce598f479baf42d00d74c2e9c0_a7240_8byvr_704.jpg';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSchtbX-ezHOUJXXJU1hi3OyABPzsNcOPQXzA&usqp=CAU';
  image3 = 'https://images.fineartamerica.com/images/artworkimages/medium/1/3-laser-eyes-space-cat-riding-sloth-dog-rainbow-random-galaxy.jpg';

  constructor() { }

  ngOnInit() {
  }

}