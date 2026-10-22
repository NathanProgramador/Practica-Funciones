// ConversorTemperatura.tsx
export const ConversorTemperatura = () => {
    // Convierte grados Celsius a Fahrenheit usando la fórmula: (c * 9/5) + 32
    const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

    // Convierte grados Fahrenheit a Celsius usando la fórmula: (f - 32) * 5/9
    const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

    const temperatura = 25;
    const fahrenheitEjemplo = 100;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Conversor de Temperatura</h3>
            <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                    <span>{temperatura}°C =</span>
                    <span className="font-semibold text-gray-900">{celsiusAFahrenheit(temperatura)}°F</span>
                </p>
                <p className="flex justify-between">
                    <span>{fahrenheitEjemplo}°F =</span>
                    <span className="font-semibold text-gray-900">{fahrenheitACelsius(fahrenheitEjemplo).toFixed(2)}°C</span>
                </p>
            </div>
        </div>
    );
};