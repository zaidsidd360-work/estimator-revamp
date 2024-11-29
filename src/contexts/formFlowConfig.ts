export type StepKey =
	| "howFarMoving"
	| "movingYour"
	| "zipCode"
	| "howManyBedrooms";

interface StepConfig {
	id: StepKey;
	label?: string;
	nextStep?: StepKey;
	options?: Array<{
		label: string;
		description: string;
		nextStep?: StepKey;
	}>;
}

export const formFlowConfig: Record<StepKey, StepConfig> = {
	howFarMoving: {
		id: "howFarMoving",
		label: "How far are you moving?",
		options: [
			{
				label: "Local",
				description: "Less than 35 miles",
				nextStep: "movingYour",
			},
			{
				label: "More than 1 hour away",
				description: "More than 35 miles",
				nextStep: "movingYour",
			},
			{
				label: "Out of state",
				description: "Exclusive direct service",
				nextStep: "movingYour",
			},
			{
				label: "Loading or Unloading Only",
				description: "We got pros to lend a hand",
				nextStep: "zipCode",
			},
		],
	},
	movingYour: {
		id: "movingYour",
		label: "What are you moving?",
		options: [
			{
				label: "House",
				description: "We have more than 40k+ 5 star reviews",
				nextStep: "howManyBedrooms",
			},
			{
				label: "Apartment",
				description: "We make it quick and easy",
				nextStep: "howManyBedrooms",
			},
			{
				label: "Condo",
				description: "We know condo rules",
				nextStep: "howManyBedrooms",
			},
			{
				label: "Few items, Office, & Storage",
				description: "Any other type of move? We've got you covered",
				nextStep: "zipCode",
			},
		],
	},
	howManyBedrooms: {
		id: "howManyBedrooms",
		label: "How many bedrooms in your house?",
		options: [
			{
				label: "4+ Bedroom",
				description: "Experienced crews to handle any sized home",
				nextStep: "zipCode",
			},
			{
				label: "3 Bedroom",
				description: "Our most common move size... we're experts",
				nextStep: "zipCode",
			},
			{
				label: "2 Bedroom",
				description: "Quick and simple move... we'll keep it that way",
				nextStep: "zipCode",
			},
			{
				label: "A few items",
				description: "No job too small",
				nextStep: "zipCode",
			},
		],
	},
	zipCode: {
		id: "zipCode",
		label: "What is your zip code?",
	},
};
