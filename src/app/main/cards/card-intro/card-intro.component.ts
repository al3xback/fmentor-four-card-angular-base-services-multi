import { Component, OnInit } from '@angular/core';

import { Summary } from '../../../shared/summary';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
	selector: 'app-card-intro',
	templateUrl: './card-intro.component.html',
	styleUrls: ['./card-intro.component.scss']
})
export class CardIntroComponent implements OnInit {
	summary: Summary;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.summary = this.cardsService.getSummaryData();
	}
}
