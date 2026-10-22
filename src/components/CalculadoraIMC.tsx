// CalculadoraIMC.tsx
export const CalculadoraIMC = () => {
    // Función para calcular el Índice de Masa Corporal: peso / (altura * altura)
    const calcularIMC = (peso: number, altura: number): number => {
        return peso / (altura * altura);
    };

    // Función para clasificar el valor del IMC según la tabla de rangos
    const clasificarIMC = (imc: number): string => {
        if (imc < 18.5) return "Bajo peso";
        if (imc >= 18.5 && imc < 25) return "Normal";
        if (imc >= 25 && imc < 30) return "Sobrepeso";
        return "Obesidad";
    };

    const peso = 70;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Calculadora de IMC</h3>
            <div className="space-y-2 text-gray-600">
                <p className="text-sm text-gray-500">
                    Peso: {peso} kg | Altura: {altura} m
                </p>
                <p className="flex justify-between">
                    <span>IMC:</span>
                    <span className="font-semibold text-gray-900">{imc.toFixed(2)}</span>
                </p>
                <p className="flex justify-between">
                    <span>Clasificación:</span>
                    <span className="font-semibold text-gray-900">{clasificarIMC(imc)}</span>
                </p>
            </div>
        </div>
    );
};