/** 
 * TYPES - Módulo Productos
 * Reutilizable para múltiples rubros/clientes
 */
export interface Producto {
  id: string
  nombre: string
  precio: number
  rubro: 'ropa' | 'tecnologia' | 'hogar'
  stock: number
  imagen: string
  descripcion: string
  clienteId?: string
}

export type Rubros = 'ropa' | 'tecnologia' | 'hogar'

export interface FiltrosProductos {
  rubro?: Rubros
  search?: string
  maxPrecio?: number
}

