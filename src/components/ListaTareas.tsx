// ListaTareas.tsx
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

export const ListaTareas = () => {
    // Arreglo de tareas de ejemplo
    const tareas: Tarea[] = [
        { id: 1, titulo: "Configurar proyecto en Vite y React", completada: true },
        { id: 2, titulo: "Aplicar estilos con Tailwind CSS", completada: true },
        { id: 3, titulo: "Desarrollar los 10 componentes de la práctica", completada: false },
    ];

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Lista de Tareas</h3>
            <div className="space-y-2">
                {tareas.map((tarea) => (
                    <div
                        key={tarea.id}
                        className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-100 text-sm"
                    >
                        <span className={tarea.completada ? "line-through text-gray-400" : "text-gray-700 font-medium"}>
                            {tarea.titulo}
                        </span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${tarea.completada ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                            {tarea.completada ? "Completada" : "Pendiente"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};