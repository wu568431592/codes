<template>
  <section>
    <header>
      <slot name="header">
        header
      </slot>
    </header>
    <main>
      <slot>
        main
      </slot>
    </main>
    <footer>
      <slot name="footer">
        footer
      </slot>
    </footer>
  </section>
</template>
