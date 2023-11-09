import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
	selector: 'app-card-karma',
	templateUrl: './card-karma.component.html',
	styleUrls: ['./card-karma.component.scss']
})
export class CardKarmaComponent implements OnInit {
	card: Card;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getCardItemData('karma');
	}
}
