import CaloriesDisplay from "./CaloriesDisplay";
import { useActivity } from "../hooks/useActivity";

export default function CaloriesTracker() {
  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity();

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorias
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CaloriesDisplay calories={caloriesConsumed} text={"Consumidas"} />
        <CaloriesDisplay calories={netCalories} text={"Diferencia"} />
        <CaloriesDisplay calories={caloriesBurned} text={"Quemadas"} />
      </div>
    </>
  );
}
