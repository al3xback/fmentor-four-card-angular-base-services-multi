export class CardsService {
	private cards = {
		intro: {
			title: 'Reliable, efficient delivery',
			subtitle: 'Powered by Technology',
			desc: 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
		},
		list: {
			supervisor: {
				title: 'Supervisor',
				desc: 'Monitors activity to identify project roadblocks',
				imageSrc: '/assets/images/icons/supervisor.svg'
			},
			teamBuilder: {
				title: 'Team Builder',
				desc: 'Scans our talent network to create the optimal team for your project',
				imageSrc: '/assets/images/icons/team-builder.svg'
			},
			karma: {
				title: 'Karma',
				desc: 'Regularly evaluates our talent to ensure quality',
				imageSrc: '/assets/images/icons/karma.svg'
			},
			calculator: {
				title: 'Calculator',
				desc: 'Uses data from past projects to provide better delivery estimates',
				imageSrc: '/assets/images/icons/calculator.svg'
			}
		}
	}

	getSummaryData() {
		return this.cards.intro;
	}

	getCardItemData(type: string) {
		return this.cards.list[type];
	}
}
