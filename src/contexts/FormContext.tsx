import React, { createContext, useContext, useState, ReactNode } from "react";
import { StepKey, formFlowConfig } from "./formFlowConfig";

interface FormData {
	howFarMoving?: string;
	movingYour?: string;
	zipCode?: string;
	howManyBedrooms?: string;
}

interface FormContextProps {
	currentStep: StepKey;
	formData: FormData;
	canGoBack: boolean;
	goToNextStep: (optionLabel?: string) => void;
	goToPreviousStep: () => void;
	updateFormData: (field: keyof FormData, value: string) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children?: ReactNode }> = ({
	children,
}) => {
	const [currentStep, setCurrentStep] = useState<StepKey>("howFarMoving");
	const [stepHistory, setStepHistory] = useState<StepKey[]>([]); // For tracking previous steps
	const [formData, setFormData] = useState<FormData>({});

	const goToNextStep = (optionLabel?: string) => {
		const stepConfig = formFlowConfig[currentStep];

		// Find the next step based on the selected option
		const nextStep =
			optionLabel && stepConfig.options
				? stepConfig.options.find(
						(option) => option.label === optionLabel
				  )?.nextStep
				: stepConfig.nextStep;

		if (nextStep) {
			setStepHistory([...stepHistory, currentStep]); // Push current step to history
			setCurrentStep(nextStep);
		}
	};

	const goToPreviousStep = () => {
		const previousStep = stepHistory.pop();
		if (previousStep) {
			setCurrentStep(previousStep);
			setStepHistory([...stepHistory]); // Update history without the last step
		}
	};

	const updateFormData = (field: keyof FormData, value: string) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
	};

	const canGoBack = stepHistory.length > 0; // Check if there is any step history to navigate back

	return (
		<FormContext.Provider
			value={{
				currentStep,
				formData,
				canGoBack,
				goToNextStep,
				goToPreviousStep,
				updateFormData,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
};
