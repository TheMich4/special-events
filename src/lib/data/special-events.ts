import type { SpecialEvent } from '$lib/types';

export default [
	{
		name: 'Roar',
		track: 'Daytona International Speedway',
		date: '12-14 JAN',
		cars: ['LMP3', 'GT4', 'Touring']
	},
	{
		name: 'Daytona 24',
		track: 'Daytona International Speedway',
		date: '19-21 JAN',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event'
	},
	{
		name: 'Daytona 500',
		track: 'Daytona International Speedway',
		date: '13-19 FEB',
		cars: ['NASCAR Cup']
	},
	{
		name: 'Bathurst 12',
		track: 'Mount Panorama Circuit',
		date: '23-25 FEB',
		cars: ['GT3'],
		type: 'Team Event'
	},
	{
		name: 'Sebring 12',
		track: 'Sebring International Speedway',
		date: '22-24 MAR',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event'
	},
	{
		name: 'Road America 500',
		track: 'Road America',
		date: '12-14 APR',
		cars: ['Nissan GTP', 'Audi 90'],
		type: 'Team Event'
	},
	{
		name: 'Nurburgring 24h',
		track: 'Nurburgring-Gesamtstrecke 24H',
		date: '17-19 MAY',
		cars: ['GT3', 'Pcup', 'GT4', 'Touring']
	},
	{
		name: 'Cake 600',
		track: 'Charlotte Motor Speedway',
		date: '21-27 MAY',
		cars: ['NASCAR Cup']
	},
	{
		name: 'Watkins Glen 6 Hour',
		track: 'Watkins Glen Speedway',
		date: '14-16 JUN',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event'
	},
	{
		name: 'Brickyard 400',
		track: 'Indianapolis Motor Speedway',
		date: '16-22 JUL',
		cars: ['NASCAR Cup']
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
		type: 'Team Event'
	},
	{
		name: 'Martinsville MX-500',
		track: 'Martinsville Speedway',
		date: '30 JUL and 4 AUG',
		cars: ['Global MX-5']
	},
	{
		name: 'Crandon Championship',
		track: 'Crandon International Raceway',
		date: '24 AUG',
		cars: ['Pro 4 Truck'],
		type: 'Super Session'
	},
	{
		name: 'Indy 6 Hour',
		track: 'Indianapolis Motor Speedway',
		date: '13-15 SEP',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event'
	},
	{
		name: 'Bristol 500',
		track: 'Bristol Motor Speedway',
		date: '17-23 SEP',
		cars: ['NASCAR Cup']
	},
	{
		name: 'Knoxville Nationals',
		track: 'Knoxville Raceway',
		date: '27-29 SEP',
		cars: ['410 Winged Sprint Car'],
		type: 'Super Session'
	},
	{
		name: 'Bathurst 1000',
		track: 'Mount Panorama Circuit',
		date: '4-6 OCT',
		cars: ['Supercars'],
		type: 'Team Event'
	},
	{
		name: 'Petit Le Mans',
		track: 'Michelin Raceway Road Atlanta',
		date: '18-19 OCT',
		cars: ['GTP', 'LMP2', 'GT3'],
		type: 'Team Event'
	},
	{
		name: 'BRSCC iRacing FF1600 Festival',
		track: 'Brands Hatch',
		date: '3 NOV',
		cars: ['FF1600']
	},
	{
		name: 'Fuji 8 Hour',
		track: 'Fuji International Raceway',
		date: '15-17 NOV',
		cars: ['GT3'],
		type: 'Team Event'
	},
	{
		name: 'SCCA Runoffs',
		track: 'Virginia International Raceway',
		date: '23 NOV',
		cars: ['6 Classes'],
		type: 'Super Session'
	},
	{
		name: 'Winter Derby',
		track: 'Five Flags Speedway',
		date: '26-29 NOV',
		cars: ['Super Late Model']
	},
	{
		name: 'Chili Bowl',
		track: 'Chili Bowl',
		date: '14 DEC',
		cars: ['Dirt Midget']
	}
] as SpecialEvent[];
