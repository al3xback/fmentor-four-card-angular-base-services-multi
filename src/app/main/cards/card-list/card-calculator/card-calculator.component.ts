import { Component, OnInit } from '@angular/core';

import { Card } from '../../../../shared/card';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
	selector: 'app-card-calculator',
	templateUrl: './card-calculator.component.html',
	styleUrls: ['./card-calculator.component.scss']
})
export class CardCalculatorComponent implements OnInit {
	card: Card;

	constructor(private cardsService: CardsService) {}

	ngOnInit() {
		this.card = this.cardsService.getCardItemData('calculator');
	}
}
