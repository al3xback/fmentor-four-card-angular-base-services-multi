import { Component, OnInit } from '@angular/core';

import { Card } from 'src/app/shared/card';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
	selector: 'app-card-team-builder',
	templateUrl: './card-team-builder.component.html',
	styleUrls: ['./card-team-builder.component.scss']
})
export class CardTeamBuilderComponent implements OnInit {
	card: Card;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getCardItemData('teamBuilder');
	}
}
