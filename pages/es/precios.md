---
title: Precios
meta_title: Precios del software de entradas | Chobble Tickets
meta_description: La venta de entradas gestionada cuesta £50 al año o £5 al mes, sin comisión por entrada. Chobble no cobra licencia por el autoalojamiento.
permalink: /es/precios/
blocks:
  - type: hero
    class: gradient
    badge: Sin comisiones por entrada
    content: |-
      # Precios del software de entradas

      El alojamiento gestionado cuesta £50 al año o £5 al mes. El precio incluye todas las funciones y no cambia con el número ni con el importe de las entradas vendidas.
    buttons:
      - text: Empezar por £5
        href: https://tix.chobble.com/ticket/register
        variant: primary
        size: lg
      - text: Ver la página de inicio
        href: /es/
        variant: secondary
        size: lg
  - type: stats
    dark: true
    items:
      - value: £50
        label: Alojamiento al año
      - value: £5
        label: Alojamiento al mes
      - value: £25
        label: Alojamiento anual reducido
      - value: £0
        label: Software autoalojado
  - type: features
    intro_content: |
      ## Formas de usar Chobble Tickets

      Todas las opciones usan el producto de código abierto completo. No hay niveles de funciones de pago.
    items:
      - icon: hugeicons:calendar-03
        name: Alojamiento anual, £50
        description: Una web de venta de entradas alojada durante un año. Cuesta £10 menos que doce pagos mensuales e incluye eventos y entradas sin límite.
      - icon: hugeicons:calendar-01
        name: Alojamiento mensual, £5
        description: Una web de venta de entradas alojada durante un mes. El pago mensual se puede cancelar sin penalización.
      - icon: hugeicons:discount
        name: Alojamiento anual reducido, £25
        description: Las entidades benéficas, los grupos comunitarios, los artistas y los músicos tienen un 50% de descuento en el alojamiento anual. El descuento no se aplica al pago mensual.
      - icon: hugeicons:source-code
        name: Autoalojamiento, sin licencia para Chobble
        description: Chobble no cobra licencia por el software bajo la AGPL-3.0-only. Usted contrata y paga la infraestructura, la instalación, las actualizaciones y el soporte.
      - icon: hugeicons:server-stack-01
        name: Alojar para otras personas
        description: Los proveedores técnicos pueden usar el generador de webs incorporado y los canales de actualización para llevar webs separadas de los organizadores a los que dan servicio.
      - icon: hugeicons:customer-service-02
        name: Contratar a Chobble
        description: Chobble hace trabajo técnico remunerado de instalación, integraciones, despliegue y cambios en el software de código abierto.
  - type: split-image
    dark: true
    subtitle: Incluido en el alojamiento gestionado
    reverse: true
    content: |
      ## Un precio para el producto entero

      El pago crea una web propia y envía por correo el enlace de configuración. La web tiene su propia base de datos, su propia clave de cifrado y su propia dirección alojada.

      El alojamiento gestionado incluye las actualizaciones del software, las herramientas de copia y restauración, una web pública de reservas, dominios propios, acceso a la API, webhooks y todas las funciones actuales. Chobble no cobra aparte por las cuentas de equipo, los informes o las integraciones.
    figure_src: /images/screenshots/dashboard.png
    figure_alt: Panel de Chobble Tickets con las áreas de administración disponibles para quien organiza
    figure_caption: El alojamiento gestionado incluye toda el área de administración y la web pública.
  - type: markdown
    content: |
      ## Costes de procesamiento de pagos

      El dinero de las entradas va directamente a la cuenta de Stripe, Square o SumUp del organizador. Chobble no retiene ese dinero ni descuenta ninguna comisión de plataforma.

      El proveedor de pagos elegido cobra su comisión habitual por transacción. Esa comisión es independiente del precio del alojamiento y varía según el proveedor, el tipo de tarjeta y el país.

      | Coste | Alojamiento gestionado | Autoalojamiento |
      |---|---:|---:|
      | Chobble Tickets | £50/año o £5/mes | £0 |
      | Comisión por entrada | £0 | £0 |
      | Comisión del proveedor de pagos | tarifa habitual del proveedor | tarifa habitual del proveedor |
      | Eventos y entradas | sin límite en el software | sin límite en el software |
      | Funciones | todas incluidas | todas incluidas |

      Chobble Tickets usa una moneda y un proveedor de tarjeta activo por web. Los eventos gratuitos funcionan sin proveedor de pagos.
  - type: markdown
    dark: true
    content: |
      ## Cuándo sale más barato un precio fijo

      Una plataforma sin cuota anual puede costar menos en un solo evento pequeño. Una cuota anual fija suele costar menos a medida que sube el número de entradas o su precio.

      Las páginas en inglés de esta web comparan suscripciones, niveles de funciones, tramos por volumen y precios por venta. Allí también hay ejemplos calculados para 50, 500 y 5.000 entradas vendidas, y una calculadora de más de 20 plataformas donde puede introducir su precio de entrada y su volumen anual.
  - type: features
    intro_content: |
      ## Antes de registrarse

      Estos límites son los motivos más habituales para elegir otra plataforma.
    items:
      - icon: hugeicons:chair-01
        name: Entrada general
        description: Chobble Tickets fija el aforo por evento, grupo o fecha. No ofrece asientos numerados sobre un plano de sala.
      - icon: hugeicons:money-03
        name: Una moneda por web
        description: El país se elige durante la instalación y determina la moneda. Una misma web no puede vender en varias monedas.
      - icon: hugeicons:search-01
        name: Sin mercado de eventos
        description: La venta se hace desde la web propia, desde contenidos incrustados y desde enlaces. Chobble Tickets no promociona eventos en un mercado de descubrimiento.
      - icon: hugeicons:customer-service
        name: Soporte por escrito
        description: El alojamiento gestionado incluye soporte por escrito en inglés. No hay centro de atención telefónica.
      - icon: hugeicons:credit-card
        name: Un proveedor de tarjeta
        description: Cada web usa un proveedor de tarjeta activo a la vez. Se puede elegir entre Stripe, Square y SumUp.
      - icon: hugeicons:user-question-01
        name: Sin listas de espera
        description: Chobble Tickets avisa cuando se agota el aforo, pero no mantiene una lista de espera para las plazas canceladas.
  - type: markdown
    content: |
      ## Más páginas en inglés

      La calculadora de comisiones, las comparativas con otras plataformas y las guías para elegir una plataforma de entradas solo están en inglés. Puede consultarlas en la <a href="/" lang="en" hreflang="en-GB">web en inglés</a>.
  - type: cta
    button:
      text: Empezar por £5
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Crear una web alojada

      El primer mes cuesta £5. El formulario de registro crea una web de entradas propia y envía el enlace de configuración tras el pago.
name: Precios del software de entradas | Chobble Tickets
---
