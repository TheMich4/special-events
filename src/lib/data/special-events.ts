import type { SpecialEvent } from '$lib/types';

export default [
	{
		name: 'Roar',
		track: 'Daytona International Speedway',
		date: '12-14 JAN',
		cars: ['LMP3', 'GT4', 'Touring'],
		endDate: new Date('2024-01-14T23:59:59.999Z')
	},
	{
		name: 'Daytona 24',
		track: 'Daytona International Speedway',
		date: '19-21 JAN',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event',
		endDate: new Date('2024-01-21T23:59:59.999Z')
	},
	{
		name: 'Daytona 500',
		track: 'Daytona International Speedway',
		date: '13-19 FEB',
		cars: ['NASCAR Cup'],
		endDate: new Date('2024-02-19T23:59:59.999Z')
	},
	{
		name: 'Bathurst 12',
		track: 'Mount Panorama Circuit',
		date: '23-25 FEB',
		cars: ['GT3'],
		type: 'Team Event',
		endDate: new Date('2024-02-25T23:59:59.999Z')
	},
	{
		name: 'Sebring 12',
		track: 'Sebring International Speedway',
		date: '22-24 MAR',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event',
		endDate: new Date('2024-03-24T23:59:59.999Z')
	},
	{
		name: 'Road America 500',
		track: 'Road America',
		date: '12-14 APR',
		cars: ['Nissan GTP', 'Audi 90'],
		type: 'Team Event',
		endDate: new Date('2024-04-14T23:59:59.999Z')
	},
	{
		name: 'Nurburgring 24h',
		track: 'Nurburgring-Gesamtstrecke 24H',
		date: '17-19 MAY',
		cars: ['GT3', 'Pcup', 'GT4', 'Touring'],
		endDate: new Date('2024-05-19T23:59:59.999Z')
	},
	{
		name: 'Cake 600',
		track: 'Charlotte Motor Speedway',
		date: '21-27 MAY',
		cars: ['NASCAR Cup'],
		endDate: new Date('2024-05-27T23:59:59.999Z')
	},
	{
		name: 'Watkins Glen 6 Hour',
		track: 'Watkins Glen Speedway',
		date: '14-16 JUN',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event',
		endDate: new Date('2024-06-16T23:59:59.999Z')
	},
	{
		name: 'Brickyard 400',
		track: 'Indianapolis Motor Speedway',
		date: '16-22 JUL',
		cars: ['NASCAR Cup'],
		endDate: new Date('2024-07-22T23:59:59.999Z')
	},
	{
		name: 'MS Charity Event',
		track: 'TBD Track',
		date: 'TBD',
		cars: ['TBD'],
		type: 'Team Event'
	},
	{
		name: 'Spa 24',
		track: 'Circuit de Spa-Francorchamps',
		date: '19-21 JUL',
		cars: ['GT3'],
		type: 'Team Event',
		endDate: new Date('2024-07-21T23:59:59.999Z')
	},
	{
		name: 'Martinsville MX-500',
		track: 'Martinsville Speedway',
		date: '30 JUL and 4 AUG',
		cars: ['Global MX-5'],
		endDate: new Date('2024-08-04T23:59:59.999Z')
	},
	{
		name: 'Crandon Championship',
		track: 'Crandon International Raceway',
		date: '24 AUG',
		cars: ['Pro 4 Truck'],
		type: 'Super Session',
		endDate: new Date('2024-08-24T23:59:59.999Z')
	},
	{
		name: 'Indy 6 Hour',
		track: 'Indianapolis Motor Speedway',
		date: '13-15 SEP',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event',
		endDate: new Date('2024-09-15T23:59:59.999Z')
	},
	{
		name: 'Bristol 500',
		track: 'Bristol Motor Speedway',
		date: '17-23 SEP',
		cars: ['NASCAR Cup'],
		endDate: new Date('2024-09-23T23:59:59.999Z')
	},
	{
		name: 'Knoxville Nationals',
		track: 'Knoxville Raceway',
		date: '27-29 SEP',
		cars: ['410 Winged Sprint Car'],
		type: 'Super Session',
		endDate: new Date('2024-09-29T23:59:59.999Z')
	},
	{
		name: 'Bathurst 1000',
		track: 'Mount Panorama Circuit',
		date: '4-6 OCT',
		cars: ['Supercars'],
		type: 'Team Event',
		endDate: new Date('2024-10-06T23:59:59.999Z')
	},
	{
		name: 'Petit Le Mans',
		track: 'Michelin Raceway Road Atlanta',
		date: '18-19 OCT',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event',
		endDate: new Date('2024-10-19T23:59:59.999Z')
	},
	{
		name: 'BRSCC iRacing FF1600 Festival',
		track: 'Brands Hatch',
		date: '3 NOV',
		cars: ['FF1600'],
		endDate: new Date('2024-11-03T23:59:59.999Z')
	},
	{
		name: 'Fuji 8 Hour',
		track: 'Fuji International Raceway',
		date: '15-17 NOV',
		cars: ['GT3'],
		type: 'Team Event',
		endDate: new Date('2024-11-17T23:59:59.999Z')
	},
	{
		name: 'SCCA Runoffs',
		track: 'Virginia International Raceway',
		date: '23 NOV',
		cars: ['6 Classes'],
		type: 'Super Session',
		endDate: new Date('2024-11-23T23:59:59.999Z')
	},
	{
		name: 'Winter Derby',
		track: 'Five Flags Speedway',
		date: '26-29 NOV',
		cars: ['Super Late Model'],
		endDate: new Date('2024-11-29T23:59:59.999Z')
	},
	{
		name: 'Chili Bowl',
		track: 'Chili Bowl',
		date: '14 DEC',
		cars: ['Dirt Midget'],
		endDate: new Date('2024-12-14T23:59:59.999Z')
	}
] as SpecialEvent[];
