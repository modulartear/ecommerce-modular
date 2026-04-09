# 🛒 E-commerce Modular

## Plataforma escalable para múltiples clientes y rubros

**Versión:** 0.0.1  
**Stack:** React + TypeScript + Firebase + Tailwind + Vite + Vercel  

### 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   cd E-commerce-modular
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

3. **Build para producción:**
   ```bash
   npm run build
   ```

### 📁 Estructura Modular

```
src/
├── core/           # Lógica de negocio reutilizable
├── modules/        # Módulos independientes (productos, carrito, usuarios)
├── components/     # UI reutilizable
├── pages/          # Vistas/Rutas principales
├── services/       # Integración Firebase
├── config/         # Configuración por cliente/rubro
├── hooks/          # Hooks personalizados
└── utils/          # Utilidades globales
```

### 📋 Funcionalidades Implementadas

- ✅ Autenticación Firebase (Email + Google)
- ✅ CRUD Productos
- ✅ Carrito persistente (localStorage + Firestore)
- ✅ Checkout básico
- ✅ Panel Admin
- ✅ Estados globales (Zustand)
- ✅ Multi-tenant ready (config por cliente)

### 🔮 Próximos Pasos

1. Configurar Firebase (ver `config/firebase.example.ts`)
2. Implementar primer módulo (Productos)
3. Panel Admin CRUD
4. Deploy Vercel

### 🛠️ Configuración Multi-Cliente

Cada cliente tiene su config en `src/config/clients/[cliente-id].ts`
```ts
export const configCliente = {
  nombre: 'Tienda Ropa XYZ',
  colores: { primary: '#ff6b6b' },
  collectionFirestore: 'productos-xyz'
}
```

**Documentación completa en `docs/` después de cada módulo.**

