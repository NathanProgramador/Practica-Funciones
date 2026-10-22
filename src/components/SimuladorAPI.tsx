// SimuladorAPI.tsx
import { useState } from 'react';

interface Usuario {
    id: number;
    nombre: string;
    correo: string;
}

export const SimuladorAPI = () => {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [cargando, setCargando] = useState<boolean>(false);

    // Función asíncrona simulada con una promesa y setTimeout
    const obtenerDatosUsuario = () => {
        setCargando(true);
        setUsuario(null);

        setTimeout(() => {
            const usuarioSimulado: Usuario = {
                id: 1,
                nombre: "Nathan Morales",
                correo: "nathan@utsv.edu.mx",
            };
            setUsuario(usuarioSimulado);
            setCargando(false);
        }, 1500);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Simulador de API / Asincronía</h3>
            <div className="space-y-3 text-gray-600 text-sm">
                <button
                    onClick={obtenerDatosUsuario}
                    disabled={cargando}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors disabled:bg-blue-300"
                >
                    {cargando ? "Cargando datos..." : "Obtener Usuario"}
                </button>

                {usuario && (
                    <div className="bg-gray-50 p-3 rounded border border-gray-100 space-y-1">
                        <p className="font-semibold text-gray-800">Datos recibidos:</p>
                        <p>ID: <span className="text-gray-900 font-medium">{usuario.id}</span></p>
                        <p>Nombre: <span className="text-gray-900 font-medium">{usuario.nombre}</span></p>
                        <p>Correo: <span className="text-gray-900 font-medium">{usuario.correo}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};