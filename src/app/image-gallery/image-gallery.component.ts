import {Component, Inject, OnInit, Optional, ViewEncapsulation} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
    selector: 'app-image-gallery',
    templateUrl: './image-gallery.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {

    listImage = [
        'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
        'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
        'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
        'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
    ];

    itemWidth: number;
    config = 4;

    constructor(
        @Inject(GalleryConfig)
        @Optional()
            config: number
    ) {
        console.log(config);
        if (config) {
            this.config = config;
        }
    }

    ngOnInit() {
        this.itemWidth = 100 / this.config;
    }
}
