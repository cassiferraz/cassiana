<template>
  <v-alert
    :value="isVisible"
    :type="type"
    :color="alertColor"
    :outlined="variant === 'outlined'"
    :text="variant === 'tonal'"
    :dense="false"
    :dismissible="dismissible"
    :icon="displayIcon"
    :class="alertClasses"
    class="v-alert-custom"
    @input="handleClose"
  >
    <template v-slot:default>
      <div class="v-alert-custom__content">
        <div class="v-alert-custom__text">
          <div class="v-alert-custom__title">{{ title }}</div>
          <div v-if="description" class="v-alert-custom__description">
            {{ description }}
          </div>
        </div>
      </div>
    </template>
  </v-alert>
</template>

<script>
export default {
  name: 'VAlert',

  props: {
    /**
     * Titulo da mensagem (obrigatorio)
     */
    title: {
      type: String,
      required: true,
    },

    /**
     * Texto de apoio (opcional)
     */
    description: {
      type: String,
      default: '',
    },

    /**
     * Nome do icone Material Icons (opcional)
     * Se nao fornecido, usa o icone padrao do tipo
     */
    icon: {
      type: String,
      default: '',
    },

    /**
     * Mostra botao X para fechar
     */
    dismissible: {
      type: Boolean,
      default: false,
    },

    /**
     * Estilo visual do alerta
     * @values outlined, filled, tonal
     */
    variant: {
      type: String,
      default: 'outlined',
      validator: (value) => ['outlined', 'filled', 'tonal'].includes(value),
    },

    /**
     * Tipo de alerta (define cor e icone padrao)
     * @values error, warning, info, success
     */
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['error', 'warning', 'info', 'success'].includes(value),
    },
  },

  data() {
    return {
      isVisible: true,
    };
  },

  computed: {
    /**
     * Mapeia os icones padrao para cada tipo
     */
    defaultIcons() {
      return {
        error: 'warning',
        warning: 'error_outline',
        info: 'info',
        success: 'check_circle',
      };
    },

    /**
     * Retorna o icone a ser exibido
     */
    displayIcon() {
      return this.icon || this.defaultIcons[this.type];
    },

    /**
     * Mapeia as cores do Vuetify 2 para cada tipo
     */
    colorMap() {
      return {
        error: 'red',
        warning: 'orange',
        info: 'blue',
        success: 'green',
      };
    },

    /**
     * Retorna a cor baseada no tipo
     */
    alertColor() {
      return this.colorMap[this.type];
    },

    /**
     * Classes CSS dinamicas
     */
    alertClasses() {
      return [
        `v-alert-custom--${this.variant}`,
        `v-alert-custom--${this.type}`,
        {
          'v-alert-custom--dismissible': this.dismissible,
        },
      ];
    },
  },

  methods: {
    /**
     * Manipula o fechamento do alerta
     */
    handleClose(value) {
      if (!value) {
        this.isVisible = false;
        this.$emit('close');
      }
    },

    /**
     * Metodo publico para resetar visibilidade
     */
    reset() {
      this.isVisible = true;
    },
  },
};
</script>

<style scoped>
.v-alert-custom {
  border-radius: 4px;
}

.v-alert-custom__content {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.v-alert-custom__text {
  flex: 1;
}

.v-alert-custom__title {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
}

.v-alert-custom__description {
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 4px;
  opacity: 0.9;
}

/* Variant: Outlined - borda colorida, fundo claro */
.v-alert-custom--outlined {
  background-color: transparent !important;
}

.v-alert-custom--outlined.v-alert-custom--error {
  border-color: #f44336 !important;
  color: #f44336 !important;
}

.v-alert-custom--outlined.v-alert-custom--warning {
  border-color: #ff9800 !important;
  color: #ff9800 !important;
}

.v-alert-custom--outlined.v-alert-custom--info {
  border-color: #2196f3 !important;
  color: #2196f3 !important;
}

.v-alert-custom--outlined.v-alert-custom--success {
  border-color: #4caf50 !important;
  color: #4caf50 !important;
}

/* Variant: Filled - fundo solido, texto branco */
.v-alert-custom--filled {
  color: white !important;
}

.v-alert-custom--filled.v-alert-custom--error {
  background-color: #f44336 !important;
  border-color: #f44336 !important;
}

.v-alert-custom--filled.v-alert-custom--warning {
  background-color: #ff9800 !important;
  border-color: #ff9800 !important;
}

.v-alert-custom--filled.v-alert-custom--info {
  background-color: #2196f3 !important;
  border-color: #2196f3 !important;
}

.v-alert-custom--filled.v-alert-custom--success {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
}

.v-alert-custom--filled .v-alert-custom__title,
.v-alert-custom--filled .v-alert-custom__description {
  color: white !important;
}

/* Variant: Tonal - SEM borda, SEM background, apenas texto e icone coloridos */
.v-alert-custom--tonal {
  background-color: transparent !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0;
}

.v-alert-custom--tonal.v-alert-custom--error {
  color: #f44336 !important;
}

.v-alert-custom--tonal.v-alert-custom--error .v-alert-custom__title,
.v-alert-custom--tonal.v-alert-custom--error .v-alert-custom__description {
  color: #f44336 !important;
}

.v-alert-custom--tonal.v-alert-custom--warning {
  color: #ff9800 !important;
}

.v-alert-custom--tonal.v-alert-custom--warning .v-alert-custom__title,
.v-alert-custom--tonal.v-alert-custom--warning .v-alert-custom__description {
  color: #ff9800 !important;
}

.v-alert-custom--tonal.v-alert-custom--info {
  color: #2196f3 !important;
}

.v-alert-custom--tonal.v-alert-custom--info .v-alert-custom__title,
.v-alert-custom--tonal.v-alert-custom--info .v-alert-custom__description {
  color: #2196f3 !important;
}

.v-alert-custom--tonal.v-alert-custom--success {
  color: #4caf50 !important;
}

.v-alert-custom--tonal.v-alert-custom--success .v-alert-custom__title,
.v-alert-custom--tonal.v-alert-custom--success .v-alert-custom__description {
  color: #4caf50 !important;
}

/* Icone herda a cor do tipo na variante tonal */
.v-alert-custom--tonal >>> .v-icon {
  color: inherit !important;
}

/* Ajustes para o icone do Vuetify */
.v-alert-custom >>> .v-icon {
  align-self: flex-start;
  margin-top: 2px;
}

/* Ajustes para o botao de fechar */
.v-alert-custom--dismissible >>> .v-alert__dismissible {
  align-self: flex-start;
  margin-top: -4px;
}

/* Remove qualquer wrapper visual na variante tonal */
.v-alert-custom--tonal >>> .v-alert__wrapper {
  background: transparent !important;
}

.v-alert-custom--tonal >>> .v-alert__content {
  padding: 0 !important;
}
</style>
