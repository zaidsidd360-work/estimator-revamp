import { useFormContext } from "../contexts/FormContext";
import HowFarMovingStep from "../form-steps/HowFarMovingStep";
import HowManyBedrooms from "../form-steps/HowManyBedroomsStep";
import MovingYourStep from "../form-steps/MovingYourStep";
import ZipCodeStep from "../form-steps/ZipCodeStep";

const CurrStepForm = () => {
	const { currentStep } = useFormContext();
	return (
		<div className="min-w-[50rem] border border-gray-500 rounded-xl">
			{currentStep === "howFarMoving" && <HowFarMovingStep />}
			{currentStep === "movingYour" && <MovingYourStep />}
			{currentStep === "howManyBedrooms" && <HowManyBedrooms />}
			{currentStep === "zipCode" && <ZipCodeStep />}
		</div>
	);
};

export default CurrStepForm;
