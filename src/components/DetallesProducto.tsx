// DetallesProducto.tsx
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    enStock: boolean;
}

export const DetallesProducto = () => {
    // Objeto de ejemplo
    const producto: Producto = {
        id: 101,
        nombre: "Laptop Profesional",
        precio: 12500.50,
        enStock: true,
    };

    // Desestructuración de propiedades del objeto
    const { nombre, precio, enStock } = producto;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Detalles del Producto</h3>
            <div className="space-y-3 text-gray-600 text-sm">
                <p className="flex justify-between">
                    <span>Nombre:</span>
                    <span className="font-semibold text-gray-900">{nombre}</span>
                </p>
                <p className="flex justify-between">
                    <span>Precio:</span>
                    <span className="font-semibold text-gray-900">${precio.toFixed(2)}</span>
                </p>
                <p className="flex justify-between items-center">
                    <span>Estado:</span>
                    <span className={`px-2 py-1 rounded font-semibold ${enStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {enStock ? 'Disponible' : 'Agotado'}
                    </span>
                </p>
            </div>
        </div>
    );
};