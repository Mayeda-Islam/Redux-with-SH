import Counter from "./components/Counter";
import DynamicHooksCounter from "./components/DaynamicCounter";
import HooksCounter from "./components/HooksCounter";
import VariableCounter from "./components/VariableCounter";

export default function App() {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        <HooksCounter id="1" />
        <DynamicHooksCounter />
        <VariableCounter />
        <VariableCounter dynamic />
      </div>
    </div>
  );
}
