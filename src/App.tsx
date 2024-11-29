import MultiStepForm from "./components/MultiStepForm";
import { FormProvider } from "./contexts/FormContext";
import FormStateContextProvider from "./contexts/FormStateContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<FormStateContextProvider>
			<FormProvider>
				<MultiStepForm />
				<ToastContainer />
			</FormProvider>
		</FormStateContextProvider>
	);
}

export default App;
