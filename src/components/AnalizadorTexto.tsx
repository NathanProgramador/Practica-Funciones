// AnalizadorTexto.tsx
export const AnalizadorTexto = () => {
    // Función para obtener la longitud de una cadena
    const obtenerLongitud = (texto: string): number => texto.length;

    // Función para convertir la cadena a mayúsculas
    const convertirMayusculas = (texto: string): string => texto.toUpperCase();

    // Función para convertir la cadena a minúsculas
    const convertirMinusculas = (texto: string): string => texto.toLowerCase();

    const textoPrueba = "Desarrollo de Software y Sistemas";

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Analizador de Texto</h3>
            <div className="space-y-2 text-gray-600 text-sm">
                <p className="font-medium text-gray-700 bg-gray-50 p-2 rounded">
                    Texto: "{textoPrueba}"
                </p>
                <p className="flex justify-between">
                    <span>Longitud:</span>
                    <span className="font-semibold text-gray-900">{obtenerLongitud(textoPrueba)} caracteres</span>
                </p>
                <p className="flex justify-between">
                    <span>Mayúsculas:</span>
                    <span className="font-semibold text-gray-900">{convertirMayusculas(textoPrueba)}</span>
                </p>
                <p className="flex justify-between">
                    <span>Minúsculas:</span>
                    <span className="font-semibold text-gray-900">{convertirMinusculas(textoPrueba)}</span>
                </p>
            </div>
        </div>
    );
};