// src/components/steps/HowFarMovingStep.tsx
import React, { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import { formFlowConfig } from "../contexts/formFlowConfig";
import FormControls from "../components/FormControls";

const HowFarMovingStep: React.FC = () => {
	const {
		updateFormData,
		goToNextStep,
		goToPreviousStep,
		canGoBack,
		formData,
	} = useFormContext();
	const { options, label } = formFlowConfig.howFarMoving;
	const [selectedOption, setSelectedOption] = useState<string | null>(
		formData.howFarMoving || null
	);

	const handleSelection = (label: string) => {
		setSelectedOption(label);
		updateFormData("howFarMoving", label);
	};

	const handleNext = () => {
		if (!selectedOption) return false;
		goToNextStep(selectedOption);
		return true;
	};

	return (
		<div className="space-y-6">
			<div className="p-10 space-y-6">
				<h2 className="text-2xl font-semibold text-zinc-900">
					{label}
				</h2>
				<div className="grid grid-cols-2 gap-4">
					{options?.map((option) => (
						<button
							key={option.label}
							className={`group relative border rounded-lg p-4 bg-white text-left shadow-sm transition-all duration-200 
								${
									selectedOption === option.label
										? "border-zinc-900 ring-2 ring-zinc-900"
										: "border-zinc-200 hover:border-zinc-900"
								}`}
							onClick={() => handleSelection(option.label)}
						>
							<h3 className="font-medium text-zinc-900">
								{option.label}
							</h3>
							<p className="text-sm text-zinc-500 mt-1">
								{option.description}
							</p>
						</button>
					))}
				</div>
			</div>
			<FormControls
				handleNext={handleNext}
				handlePrev={canGoBack ? goToPreviousStep : undefined}
			/>
		</div>
	);
};

export default HowFarMovingStep;
