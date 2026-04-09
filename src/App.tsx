import { cn } from '@/utils/cn'
import { Routes, Route, Link } from 'react-router-dom'
import ProductosPage from '@/pages/productos/page'
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
      
      <nav className="container mx-auto px-4 py-4 flex gap-4 mb-8">
        <Link to="/" className="text-primary hover:underline font-medium">Home</Link>
        <Link to="/productos" className="text-primary hover:underline font-medium">Productos</Link>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={
            <div className="text-center max-w-2xl mx-auto px-4 py-12">
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                ¡Estructura Base Creada! ✅
              </h2>
              <div className="grid gap-4 mb-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">📁 Módulos Implementados</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Productos CRUD (Firestore ready)</li>
                    <li>• UI responsive Tailwind</li>
                    <li>• Multi-rubro (ropa/tech)</li>
                  </ul>
                </div>
              </div>
            </div>
          } />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </main>

      <Toaster />
    </div>
  )
}

export default App

