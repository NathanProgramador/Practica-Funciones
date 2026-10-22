// ValidadorEdad.tsx
export const ValidadorEdad = () => {
    // Retorna true si la edad es mayor o igual a 18, false en caso contrario
    const esMayorDeEdad = (edad: number): boolean => edad >= 18;

    // Retorna "Puede votar" si es mayor de edad, o cuántos años le faltan si es menor
    const obtenerMensaje = (edad: number): string => {
        if (esMayorDeEdad(edad)) {
            return "Puede votar";
        } else {
            return `Le faltan ${18 - edad} años`;
        }
    };

    const edades = [15, 18, 25, 12];

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Validador de Edad</h3>
            <div className="space-y-2 text-gray-600">
                {edades.map((edad, i) => (
                    <p key={i} className="flex justify-between">
                        <span>Edad {edad}:</span>
                        <span className="font-semibold text-gray-900">{obtenerMensaje(edad)}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};