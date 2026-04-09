import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { productosService } from '@/services/productos'
import type { Producto } from '@/modules/productos/types'
import { Button } from '@/components/ui/button' // future
import { toast } from 'sonner'

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProductos()
  }, [])

  const loadProductos = async () => {
    try {
      // Mock hasta Firebase real
      const mockProductos: Producto[] = [
        { id: '1', nombre: 'Camiseta Basic', precio: 25, rubro: 'ropa', stock: 50, imagen: '/placeholder.jpg', descripcion: '100% algodón' },
        { id: '2', nombre: 'iPhone 15', precio: 999, rubro: 'tecnologia', stock: 10, imagen: '/placeholder.jpg', descripcion: 'Ultimo modelo' },
      ]
      setProductos(mockProductos)
    } catch (error) {
      toast.error('Error cargando productos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">📦 Productos</h1>
        <Button onClick={loadProductos}>Recargar</Button>
      </div>
      
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map(producto => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}

