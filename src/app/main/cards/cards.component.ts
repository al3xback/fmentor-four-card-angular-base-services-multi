import { Component } from '@angular/core';

import { CardsService } from '../../shared/cards.service';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss'],
	providers: [CardsService]
})
export class CardsComponent {}
