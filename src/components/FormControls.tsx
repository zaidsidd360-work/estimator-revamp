import { memo } from "react";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";

interface FormControlProps {
	handleNext: () => boolean | Promise<boolean>;
	handlePrev?: () => void;
	isNextLoading?: boolean;
}

const FormControls = memo(
	({ handleNext, handlePrev, isNextLoading }: FormControlProps) => {
		const handleNextClick = async () => {
			const isOkToContinue = await handleNext();
			if (!isOkToContinue) return;
		};

		return (
			<div className="flex justify-between items-center bottom-0 border-t border-gray-400 py-3 px-4 md:px-10 bg-white bg-opacity-30 backdrop-blur-md shadow-lg min-w-full rounded-b-xl">
				<button
					onClick={handlePrev}
					disabled={!handlePrev}
					className={`text-black bg-white border border-[#0000001F] p-3 rounded-full font-bold md:multi-[flex;items-center;gap-3;px-5;py-2;font-light;rounded-sm] ${
						!handlePrev ? "opacity-50 cursor-not-allowed" : ""
					}`}
				>
					<ChevronLeft size={14} />
					<p className="hidden md:block">Previous</p>
				</button>
				<button
					className="text-white bg-black p-3 rounded-full md:multi-[flex;items-center;gap-3;px-5;py-2;font-light;rounded-sm]"
					onClick={handleNextClick}
				>
					<p className="hidden md:block">Next</p>
					{isNextLoading ? (
						<Loader size={14} className="animate-spin" />
					) : (
						<ChevronRight size={14} />
					)}
				</button>
			</div>
		);
	}
);

export default FormControls;
