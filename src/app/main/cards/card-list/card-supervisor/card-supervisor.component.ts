import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
	selector: 'app-card-supervisor',
	templateUrl: './card-supervisor.component.html',
	styleUrls: ['./card-supervisor.component.scss']
})
export class CardSupervisorComponent implements OnInit {
	card: Card;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getCardItemData('supervisor');
	}
}
