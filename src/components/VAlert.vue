<template>
  <v-alert
    :type="type"
    :outlined="variant === 'outlined'"
    :text="variant === 'tonal'"
    :color="alertColor"
    :icon="computedIcon"
    :dismissible="dismissible"
    :class="alertClasses"
    class="v-custom-alert"
    @input="onClose"
  >
    <template v-slot:default>
      <div class="v-custom-alert__content">
        <div class="v-custom-alert__title">{{ title }}</div>
        <div v-if="description" class="v-custom-alert__description">
          {{ description }}
        </div>
      </div>
    </template>
  </v-alert>
</template>

<script>
export default {
  name: 'VAlert',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'outlined',
      validator: (value) => ['outlined', 'filled', 'tonal'].includes(value),
    },
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['error', 'warning', 'info', 'success'].includes(value),
    },
  },

  computed: {
    defaultIcons() {
      return {
        error: 'mdi-alert',
        warning: 'mdi-alert-circle-outline',
        info: 'mdi-information',
        success: 'mdi-check-circle',
      };
    },

    computedIcon() {
      if (this.icon) {
        return this.icon.startsWith('mdi-') ? this.icon : `mdi-${this.icon}`;
      }
      return this.defaultIcons[this.type];
    },

    alertColor() {
      const colors = {
        error: 'red',
        warning: 'orange',
        info: 'blue',
        success: 'green',
      };
      return colors[this.type];
    },

    alertClasses() {
      return [
        `v-custom-alert--${this.variant}`,
        `v-custom-alert--${this.type}`,
      ];
    },
  },

  methods: {
    onClose(value) {
      if (!value) {
        this.$emit('close');
      }
    },
  },
};
</script>

<style scoped>
.v-custom-alert {
  font-size: 1rem;
}

.v-custom-alert__content {
  display: flex;
  flex-direction: column;
  gap: 0.286rem;
}

.v-custom-alert__title {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
}

.v-custom-alert__description {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Outlined variant */
.v-custom-alert--outlined.v-custom-alert--error {
  background-color: rgba(244, 67, 54, 0.08);
}

.v-custom-alert--outlined.v-custom-alert--warning {
  background-color: rgba(255, 152, 0, 0.08);
}

.v-custom-alert--outlined.v-custom-alert--info {
  background-color: rgba(33, 150, 243, 0.08);
}

.v-custom-alert--outlined.v-custom-alert--success {
  background-color: rgba(76, 175, 80, 0.08);
}

/* Filled variant - text white */
.v-custom-alert--filled .v-custom-alert__title,
.v-custom-alert--filled .v-custom-alert__description {
  color: white;
}

/* Tonal variant - no background, no border */
.v-custom-alert--tonal.v-alert {
  background-color: transparent;
  border: none;
}

.v-custom-alert--tonal.v-custom-alert--error .v-custom-alert__title,
.v-custom-alert--tonal.v-custom-alert--error .v-custom-alert__description {
  color: #f44336;
}

.v-custom-alert--tonal.v-custom-alert--warning .v-custom-alert__title,
.v-custom-alert--tonal.v-custom-alert--warning .v-custom-alert__description {
  color: #ff9800;
}

.v-custom-alert--tonal.v-custom-alert--info .v-custom-alert__title,
.v-custom-alert--tonal.v-custom-alert--info .v-custom-alert__description {
  color: #2196f3;
}

.v-custom-alert--tonal.v-custom-alert--success .v-custom-alert__title,
.v-custom-alert--tonal.v-custom-alert--success .v-custom-alert__description {
  color: #4caf50;
}
</style>
