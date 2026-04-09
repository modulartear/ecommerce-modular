/**
 * SERVICE - Productos Firestore
 * CRUD + real-time para cualquier rubro
 */
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/services/firebase'
import type { Producto, FiltrosProductos } from '@/modules/productos/types'

const COLLECTION = 'productos' // → 'productos-{clienteId}' por config

export const productosService = {
  async getAll(filtros?: FiltrosProductos): Promise<Producto[]> {
    let q = collection(db, COLLECTION)
    if (filtros) {
      q = query(q, 
        filtros.rubro ? where('rubro', '==', filtros.rubro) : [],
        orderBy('precio')
      ) as any
    }
    const snapshot = await getDocs(q)
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Producto))
  },

  async create(producto: Omit<Producto, 'id'>): Promise<Producto> {
    const docRef = await addDoc(collection(db, COLLECTION), producto)
    return { id: docRef.id, ...producto }
  },

  async update(producto: Producto): Promise<void> {
    const ref = doc(db, COLLECTION, producto.id)
    await updateDoc(ref, { ...producto })
  },

  async delete(id: string): Promise<void> {
    const ref = doc(db, COLLECTION, id)
    await deleteDoc(ref)
  }
}

