// Calculadora.tsx
export const Calculadora = () => {
    // Sumar dos números con tipado explícito
    const sumar = (a: number, b: number): number => a + b;

    // Restar dos números
    const restar = (a: number, b: number): number => a - b;

    // Multiplicar dos números
    const multiplicar = (a: number, b: number): number => a * b;

    // Dividir dos números (retorna 0 si b es cero para evitar errores)
    const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

    const a = 15;
    const b = 4;
    const bZero = 0;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Calculadora Básica</h3>
            <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                    <span>{a} + {b} =</span>
                    <span className="font-semibold text-gray-900">{sumar(a, b)}</span>
                </p>
                <p className="flex justify-between">
                    <span>{a} - {b} =</span>
                    <span className="font-semibold text-gray-900">{restar(a, b)}</span>
                </p>
                <p className="flex justify-between">
                    <span>{a} × {b} =</span>
                    <span className="font-semibold text-gray-900">{multiplicar(a, b)}</span>
                </p>
                <p className="flex justify-between">
                    <span>{a} ÷ {b} =</span>
                    <span className="font-semibold text-gray-900">{dividir(a, b).toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-sm text-gray-500">
                    <span>{a} ÷ {bZero} (caso especial) =</span>
                    <span className="font-semibold text-gray-700">{dividir(a, bZero)}</span>
                </p>
            </div>
        </div>
    );
};