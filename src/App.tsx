import { cn } from '@/utils/cn'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <div className={cn("min-h-screen bg-background")}>
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">
            🛒 E-commerce Modular - Desarrollo Inicial
          </h1>
          <p className="text-muted-foreground">
            Plataforma escalable lista para múltiples clientes
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            ¡Estructura Base Creada! ✅
          </h2>
          <div className="grid gap-4 mb-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">📁 Estructura Modular</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>core/ - Lógica reutilizable</li>
                <li>modules/ - Productos, Carrito, etc.</li>
                <li>services/ - Firebase</li>
                <li>config/ - Multi-cliente</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">🎯 Próximo Paso</h3>
              <p className="text-sm">Instalar dependencias y ejecutar npm run dev</p>
            </div>
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  )
}

export default App
