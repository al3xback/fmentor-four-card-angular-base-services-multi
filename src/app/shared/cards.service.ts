export class CardsService {
	private cards = {
		intro: {
			subtitle: 'Reliable, efficient delivery',
			title: 'Powered by Technology',
			description: 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
		},
		list: {
			supervisor: {
				title: 'Supervisor',
				description: 'Monitors activity to identify project roadblocks',
				imageUrl: '/assets/images/icons/supervisor.svg'
			},
			teamBuilder: {
				title: 'Team Builder',
				description: 'Scans our talent network to create the optimal team for your project',
				imageUrl: '/assets/images/icons/team-builder.svg'
			},
			karma: {
				title: 'Karma',
				description: 'Regularly evaluates our talent to ensure quality',
				imageUrl: '/assets/images/icons/karma.svg'
			},
			calculator: {
				title: 'Calculator',
				description: 'Uses data from past projects to provide better delivery estimates',
				imageUrl: '/assets/images/icons/calculator.svg'
			}
		}
	}

	getCardSummaryData() {
		return this.cards.intro;
	}

	getCardItemData(type: string) {
		return this.cards.list[type];
	}
}
