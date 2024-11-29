import React, { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import { formFlowConfig } from "../contexts/formFlowConfig";
import FormControls from "../components/FormControls";

const ZipCodeStep: React.FC = () => {
	const {
		goToNextStep,
		goToPreviousStep,
		updateFormData,
		canGoBack,
		formData,
	} = useFormContext();
	const [zipCode, setZipCode] = useState(formData.zipCode || "");
	const [error, setError] = useState<string | null>(null);
	const { label } = formFlowConfig.zipCode;

	const handleZipCodeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		setZipCode(value);
		updateFormData("zipCode", value);
		if (error) setError(null);
	};

	const handleNext = () => {
		if (!/^\d{5}$/.test(zipCode)) {
			setError("Please enter a valid 5-digit zip code.");
			return false;
		}
		goToNextStep();
		return true;
	};

	return (
		<div className="space-y-6">
			<div className="p-10 space-y-6">
				<h2 className="text-2xl font-semibold text-zinc-900">
					{label}
				</h2>
				<div>
					<label
						htmlFor="zipcode"
						className="block text-sm font-medium text-zinc-700 mb-2"
					>
						Enter Zip Code
					</label>
					<input
						type="text"
						id="zipcode"
						className="block w-full rounded-lg border border-zinc-200 px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors duration-200"
						placeholder="e.g., 12345"
						value={zipCode}
						onChange={handleZipCodeChange}
					/>
					{error && (
						<p className="text-red-500 text-sm mt-2">{error}</p>
					)}
				</div>
			</div>
			<FormControls
				handleNext={handleNext}
				handlePrev={canGoBack ? goToPreviousStep : undefined}
			/>
		</div>
	);
};

export default ZipCodeStep;
