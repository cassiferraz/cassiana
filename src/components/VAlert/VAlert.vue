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
     * Título da mensagem (obrigatório)
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
     * Nome do ícone Material Icons (opcional)
     * Se não fornecido, usa o ícone padrão do tipo
     */
    icon: {
      type: String,
      default: '',
    },

    /**
     * Mostra botão X para fechar
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
     * Tipo de alerta (define cor e ícone padrão)
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
     * Mapeia os ícones padrão para cada tipo
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
     * Retorna o ícone a ser exibido
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
     * Classes CSS dinâmicas
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
     * Método público para resetar visibilidade
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

/* Variant: Filled - fundo sólido, texto branco */
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

/* Variant: Tonal - fundo suave, sem borda */
.v-alert-custom--tonal {
  border: none !important;
}

.v-alert-custom--tonal.v-alert-custom--error {
  background-color: rgba(244, 67, 54, 0.12) !important;
  color: #c62828 !important;
}

.v-alert-custom--tonal.v-alert-custom--warning {
  background-color: rgba(255, 152, 0, 0.12) !important;
  color: #ef6c00 !important;
}

.v-alert-custom--tonal.v-alert-custom--info {
  background-color: rgba(33, 150, 243, 0.12) !important;
  color: #1565c0 !important;
}

.v-alert-custom--tonal.v-alert-custom--success {
  background-color: rgba(76, 175, 80, 0.12) !important;
  color: #2e7d32 !important;
}

/* Ajustes para o ícone do Vuetify */
.v-alert-custom >>> .v-icon {
  align-self: flex-start;
  margin-top: 2px;
}

/* Ajustes para o botão de fechar */
.v-alert-custom--dismissible >>> .v-alert__dismissible {
  align-self: flex-start;
  margin-top: -4px;
}
</style>
