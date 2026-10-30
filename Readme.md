Markdown
# Demoblaze E2E Test Automation Suite 🚀

Suite de pruebas automatizadas End-to-End (E2E) desarrollada para la plataforma de e-commerce [DemoBlaze](https://www.demoblaze.com/), utilizando **Playwright** y **TypeScript** bajo un enfoque de arquitectura limpia y buenas prácticas de QA.

---

## 🛠️ Stack Tecnológico

* **Framework de Automatización:** [Playwright](https://playwright.dev/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Patrón de Diseño:** Page Object Model (POM)
* **Gestión de Dependencias:** Node.js / NPM

---

## 📂 Estructura del Proyecto

El proyecto está organizado modularmente para garantizar escalabilidad, mantenibilidad y separación de responsabilidades:

```text
demoblaze-suite/
│
├── .github/              # Configuración de pipelines (opcional/CI)
├── src/
│   ├── components/       # Componentes reutilizables (Headers, Modales de Auth)
│   ├── fixtures/         # Fixtures personalizados de Playwright
│   ├── pages/            # Page Objects (Home, Product, Cart)
│   └── tests/
│       ├── auth/         # Pruebas de autenticación / login
│       └── e2e/          # Pruebas End-to-End (Happy paths y flujos negativos)
│
├── playwright.config.ts  # Configuración global de Playwright
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto
🧪 Casos de Prueba Cubiertos
Flujo Positivo (Happy Path) de Checkout:

Navegación por la tienda y selección de productos.

Adición de artículos al carrito.

Completado del formulario de orden y validación de compra exitosa.

Flujos Negativos:

Validación de alertas nativas del navegador (window.alert) al intentar avanzar en el checkout sin completar los campos obligatorios.

Verificación de que el modal de éxito no se despliegue ante datos inválidos o incompletos.

🚀 Guía de Instalación y Ejecución
1. Clonar el repositorio
Bash
git clone [https://github.com/TU_USUARIO/demoblaze-suite.git](https://github.com/TU_USUARIO/demoblaze-suite.git)
cd demoblaze-suite
2. Instalar dependencias
Asegurate de tener Node.js instalado y ejecutá:

Bash
npm install
3. Instalar los navegadores de Playwright
Bash
npx playwright install
4. Ejecutar las pruebas
Correr todas las pruebas en modo visual (Headed):

Bash
npx playwright test --headed
Correr un archivo de prueba específico:

Bash
npx playwright test src/tests/e2e/checkout.spec.ts --headed
Ver el reporte HTML detallado:

Bash
npx playwright show-report
✒️ Autor
Desarrollado por Dario Emanuel Velez como parte de su especialización en QA Automation Engineering.