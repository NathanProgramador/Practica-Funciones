import './App.css'
import { Calculadora } from './components/Calculadora'
import { ConversorTemperatura } from './components/ConversorTemperatura'
import { CalculadoraIMC } from './components/CalculadoraIMC'
import { ValidadorEdad } from './components/ValidadorEdad'
import { AnalizadorTexto } from './components/AnalizadorTexto'
import { FiltroArreglos } from './components/FiltroArreglos'
import { PromedioCalificaciones } from './components/PromedioCalificaciones'
import { DetallesProducto } from './components/DetallesProducto'
import { ListaTareas } from './components/ListaTareas'
import { SimuladorAPI } from './components/SimuladorAPI'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          📚 Práctica Completa: TypeScript y React
        </h1>

        <Calculadora />
        <ConversorTemperatura />
        <CalculadoraIMC />
        <ValidadorEdad />
        <AnalizadorTexto />
        <FiltroArreglos />
        <PromedioCalificaciones />
        <DetallesProducto />
        <ListaTareas />
        <SimuladorAPI />
      </div>
    </div>
  )
}

export default App