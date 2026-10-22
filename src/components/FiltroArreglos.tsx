// FiltroArreglos.tsx
export const FiltroArreglos = () => {
    // Arreglo de números de ejemplo
    const numeros: number[] = [4, 12, 19, 22, 35, 8, 41, 50, 3];

    // Función para filtrar únicamente los números pares
    const obtenerPares = (nums: number[]): number[] => {
        return nums.filter((n) => n % 2 === 0);
    };

    // Función para filtrar números mayores a 20
    const obtenerMayoresA20 = (nums: number[]): number[] => {
        return nums.filter((n) => n > 20);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Filtrado de Arreglos</h3>
            <div className="space-y-3 text-gray-600 text-sm">
                <p className="font-medium text-gray-700 bg-gray-50 p-2 rounded">
                    Arreglo original: [{numeros.join(", ")}]
                </p>
                <div className="flex justify-between items-center">
                    <span>Números pares:</span>
                    <span className="font-semibold text-gray-900 bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        [{obtenerPares(numeros).join(", ")}]
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Mayores a 20:</span>
                    <span className="font-semibold text-gray-900 bg-green-50 text-green-700 px-2 py-1 rounded">
                        [{obtenerMayoresA20(numeros).join(", ")}]
                    </span>
                </div>
            </div>
        </div>
    );
};