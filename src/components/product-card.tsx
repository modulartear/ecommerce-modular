import { Producto } from '@/modules/productos/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card' // shadcn future
import { ShoppingCart, Heart } from 'lucide-react'

interface Props {
  producto: Producto
  onAddToCart?: () => void
}

export const ProductCard = ({ producto, onAddToCart }: Props) => (
  <div className="group hover:shadow-lg transition-all border rounded-lg overflow-hidden">
    <div className="h-48 bg-gradient-to-r from-muted to-accent p-4 flex items-center justify-center">
      <img src={producto.imagen} alt={producto.nombre} className="h-24 w-24 object-cover rounded" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">{producto.nombre}</h3>
      <p className="text-2xl font-bold text-primary">${producto.precio}</p>
      <p className="text-sm text-muted-foreground">Stock: {producto.stock}</p>
      <div className="flex gap-2 mt-3">
        <button 
          className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition flex items-center gap-2"
          onClick={onAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Añadir
        </button>
      </div>
    </div>
  </div>
)

