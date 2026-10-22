// PromedioCalificaciones.tsx
export const PromedioCalificaciones = () => {
    // Arreglo de calificaciones de ejemplo
    const calificaciones: number[] = [85, 90, 78, 92, 88];

    // Función para calcular el promedio usando reduce
    const calcularPromedio = (califs: number[]): number => {
        if (califs.length === 0) return 0;
        const suma = califs.reduce((acumulador, actual) => acumulador + actual, 0);
        return suma / califs.length;
    };

    const promedio = calcularPromedio(calificaciones);

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Promedio de Calificaciones</h3>
            <div className="space-y-3 text-gray-600 text-sm">
                <p className="font-medium text-gray-700 bg-gray-50 p-2 rounded">
                    Calificaciones: [{calificaciones.join(", ")}]
                </p>
                <div className="flex justify-between items-center">
                    <span>Promedio final:</span>
                    <span className={`font-bold px-3 py-1 rounded text-base ${promedio >= 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                        {promedio.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};