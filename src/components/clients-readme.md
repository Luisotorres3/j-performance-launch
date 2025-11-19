# Instrucciones para la sección "Con quién he trabajado anteriormente"

Este archivo explica cómo preparar y añadir clientes (fotos + mini-CV) para el componente `ClientsSection`.

## Ubicación recomendada de las imágenes

- Crea la carpeta `src/assets/clients/` y coloca allí las imágenes.
- Formato recomendado: `webp` o `jpg/png` si no puedes convertir.
- Tamaño sugerido: 800×800 px, recortadas al cuadrado. Optimiza para < 200 KB cuando sea posible.
- Nombres de archivo: `apellido-nombre.webp` (ej. `messi-lionel.webp`) o `client-1.webp`.

## Estructura de datos que usa `ClientsSection`

El componente acepta una prop `clients?: Client[]` donde `Client` tiene la forma:

```ts
interface Client {
  id: string | number;
  name: string; // Nombre completo
  role?: string; // e.g. "Jugador profesional", "Preparador físico"
  clubs?: string; // e.g. "Real Madrid (2016–2020), PSG (2021–)"
  photo?: string; // Ruta relativa (import) o URL pública
  miniCV?: string; // 1-2 líneas: equipos, logros, temporadas
}
```

### Ejemplo (usar en `Index.tsx` o pasar como prop)

```tsx
import ClientsSection, { Client } from "@/components/ClientsSection";
import messi from "@/assets/clients/messi-lionel.webp";
import ramos from "@/assets/clients/ramos-sergio.webp";

const clients: Client[] = [
  {
    id: 1,
    name: "Lionel Messi",
    role: "Jugador profesional",
    clubs: "Barcelona (2004–2021), PSG (2021–)",
    photo: messi,
    miniCV:
      "Delantero, ganador de múltiples Balones de Oro. Ha jugado en clubes top y selección nacional.",
  },
  {
    id: 2,
    name: "Sergio Ramos",
    role: "Defensa",
    clubs: "Sevilla, Real Madrid, PSG",
    photo: ramos,
    miniCV: "Capitán y líder defensivo, campeón de ligas y Champions.",
  },
];

// Uso: pasar como prop
<ClientsSection clients={clients} />;
```

> Nota: si usas imports (como en el ejemplo) asegúrate de tener los archivos dentro de `src/assets/clients/`.

## Mini-CV (recomendación)

- Máximo 1-2 líneas (20–30 palabras).
- Incluir: posiciones, equipos principales y logros relevantes (p. ej. "Selección nacional, campeón liga 2018").
- Evitar textos largos; si quieres biografías extensas, puedo añadir un modal "Ver más".

## Accessibility / Alt text

- El campo `photo` debe tener `alt` implicado en el `name` — el componente ya usa `alt={c.name}`.
- Mantén contraste suficiente en overlays si agregamos nombres sobre la imagen.

## Tips adicionales

- Si me pasas las fotos por aquí (o en un zip), las puedo añadir yo y generar las importaciones necesarias.
- Puedo añadir badges (medallas/íconos) por logros si lo deseas; indícame qué íconos y para quién.

---

Si quieres, creo un modal para "Ver más" donde mostrar el mini-curriculum completo, fechas y estadísticas. ¿Lo añado?
