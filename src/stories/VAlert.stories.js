import VAlert from '../components/VAlert.vue';

export default {
  title: 'Components/VAlert',
  component: VAlert,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título da mensagem (obrigatório)',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Texto de apoio (opcional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    icon: {
      control: 'text',
      description: 'Nome do ícone Material Design Icons (opcional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Mostra botão X para fechar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'tonal'],
      description: 'Estilo visual do alerta',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    type: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'Tipo de alerta (define a cor)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    close: {
      action: 'close',
      description: 'Evento emitido ao clicar no botão X',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de alerta baseado no v-alert do Vuetify 2 com suporte a diferentes variantes e tipos.',
      },
    },
  },
};

// Template base
const Template = (args) => ({
  components: { VAlert },
  setup() {
    return { args };
  },
  template: '<VAlert v-bind="args" @close="args.close" />',
});

// ============================================
// Default Story with Interactive Controls
// ============================================
export const Default = Template.bind({});
Default.args = {
  title: 'Título do alerta',
  description: 'Esta é uma descrição de apoio para o alerta.',
  variant: 'outlined',
  type: 'info',
  dismissible: false,
  icon: '',
};

// ============================================
// Variant x Type Combinations (12 variations)
// ============================================

// Outlined Variants
export const OutlinedError = Template.bind({});
OutlinedError.args = {
  title: 'Erro',
  description: 'Ocorreu um erro ao processar sua solicitação.',
  variant: 'outlined',
  type: 'error',
};
OutlinedError.storyName = 'Outlined / Error';

export const OutlinedWarning = Template.bind({});
OutlinedWarning.args = {
  title: 'Atenção',
  description: 'Esta ação pode ter consequências irreversíveis.',
  variant: 'outlined',
  type: 'warning',
};
OutlinedWarning.storyName = 'Outlined / Warning';

export const OutlinedInfo = Template.bind({});
OutlinedInfo.args = {
  title: 'Informação',
  description: 'Aqui está uma informação importante para você.',
  variant: 'outlined',
  type: 'info',
};
OutlinedInfo.storyName = 'Outlined / Info';

export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  title: 'Sucesso',
  description: 'Sua operação foi concluída com sucesso.',
  variant: 'outlined',
  type: 'success',
};
OutlinedSuccess.storyName = 'Outlined / Success';

// Filled Variants
export const FilledError = Template.bind({});
FilledError.args = {
  title: 'Erro',
  description: 'Ocorreu um erro ao processar sua solicitação.',
  variant: 'filled',
  type: 'error',
};
FilledError.storyName = 'Filled / Error';

export const FilledWarning = Template.bind({});
FilledWarning.args = {
  title: 'Atenção',
  description: 'Esta ação pode ter consequências irreversíveis.',
  variant: 'filled',
  type: 'warning',
};
FilledWarning.storyName = 'Filled / Warning';

export const FilledInfo = Template.bind({});
FilledInfo.args = {
  title: 'Informação',
  description: 'Aqui está uma informação importante para você.',
  variant: 'filled',
  type: 'info',
};
FilledInfo.storyName = 'Filled / Info';

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  title: 'Sucesso',
  description: 'Sua operação foi concluída com sucesso.',
  variant: 'filled',
  type: 'success',
};
FilledSuccess.storyName = 'Filled / Success';

// Tonal Variants
export const TonalError = Template.bind({});
TonalError.args = {
  title: 'Erro',
  description: 'Ocorreu um erro ao processar sua solicitação.',
  variant: 'tonal',
  type: 'error',
};
TonalError.storyName = 'Tonal / Error';

export const TonalWarning = Template.bind({});
TonalWarning.args = {
  title: 'Atenção',
  description: 'Esta ação pode ter consequências irreversíveis.',
  variant: 'tonal',
  type: 'warning',
};
TonalWarning.storyName = 'Tonal / Warning';

export const TonalInfo = Template.bind({});
TonalInfo.args = {
  title: 'Informação',
  description: 'Aqui está uma informação importante para você.',
  variant: 'tonal',
  type: 'info',
};
TonalInfo.storyName = 'Tonal / Info';

export const TonalSuccess = Template.bind({});
TonalSuccess.args = {
  title: 'Sucesso',
  description: 'Sua operação foi concluída com sucesso.',
  variant: 'tonal',
  type: 'success',
};
TonalSuccess.storyName = 'Tonal / Success';

// ============================================
// With and Without Description
// ============================================
export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Alerta com descrição',
  description: 'Esta é uma descrição detalhada que fornece mais contexto sobre o alerta.',
  variant: 'outlined',
  type: 'info',
};
WithDescription.storyName = 'Com Descrição';

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  title: 'Alerta sem descrição',
  description: '',
  variant: 'outlined',
  type: 'info',
};
WithoutDescription.storyName = 'Sem Descrição';

// ============================================
// With and Without Custom Icon
// ============================================
export const WithDefaultIcon = Template.bind({});
WithDefaultIcon.args = {
  title: 'Alerta com ícone padrão',
  description: 'Este alerta usa o ícone padrão do tipo info.',
  variant: 'outlined',
  type: 'info',
  icon: '',
};
WithDefaultIcon.storyName = 'Ícone Padrão';

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  title: 'Alerta com ícone customizado',
  description: 'Este alerta usa um ícone personalizado (mdi-bell).',
  variant: 'outlined',
  type: 'info',
  icon: 'mdi-bell',
};
WithCustomIcon.storyName = 'Ícone Customizado';

export const WithCustomIconWithoutPrefix = Template.bind({});
WithCustomIconWithoutPrefix.args = {
  title: 'Alerta com ícone sem prefixo',
  description: 'O prefixo mdi- é adicionado automaticamente.',
  variant: 'outlined',
  type: 'warning',
  icon: 'star',
};
WithCustomIconWithoutPrefix.storyName = 'Ícone Sem Prefixo MDI';

// ============================================
// Dismissible
// ============================================
export const Dismissible = Template.bind({});
Dismissible.args = {
  title: 'Alerta dismissível',
  description: 'Clique no X para fechar este alerta.',
  variant: 'outlined',
  type: 'warning',
  dismissible: true,
};
Dismissible.storyName = 'Dismissível';

export const DismissibleFilled = Template.bind({});
DismissibleFilled.args = {
  title: 'Alerta dismissível preenchido',
  description: 'Versão filled com botão de fechar.',
  variant: 'filled',
  type: 'error',
  dismissible: true,
};
DismissibleFilled.storyName = 'Dismissível Filled';

export const DismissibleTonal = Template.bind({});
DismissibleTonal.args = {
  title: 'Alerta dismissível tonal',
  description: 'Versão tonal com botão de fechar.',
  variant: 'tonal',
  type: 'success',
  dismissible: true,
};
DismissibleTonal.storyName = 'Dismissível Tonal';

// ============================================
// All Variants Showcase
// ============================================
const ShowcaseTemplate = () => ({
  components: { VAlert },
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <h3 style="margin: 0; font-size: 1.25rem;">Outlined</h3>
      <VAlert title="Error" description="Mensagem de erro" variant="outlined" type="error" />
      <VAlert title="Warning" description="Mensagem de aviso" variant="outlined" type="warning" />
      <VAlert title="Info" description="Mensagem informativa" variant="outlined" type="info" />
      <VAlert title="Success" description="Mensagem de sucesso" variant="outlined" type="success" />

      <h3 style="margin: 16px 0 0 0; font-size: 1.25rem;">Filled</h3>
      <VAlert title="Error" description="Mensagem de erro" variant="filled" type="error" />
      <VAlert title="Warning" description="Mensagem de aviso" variant="filled" type="warning" />
      <VAlert title="Info" description="Mensagem informativa" variant="filled" type="info" />
      <VAlert title="Success" description="Mensagem de sucesso" variant="filled" type="success" />

      <h3 style="margin: 16px 0 0 0; font-size: 1.25rem;">Tonal</h3>
      <VAlert title="Error" description="Mensagem de erro" variant="tonal" type="error" />
      <VAlert title="Warning" description="Mensagem de aviso" variant="tonal" type="warning" />
      <VAlert title="Info" description="Mensagem informativa" variant="tonal" type="info" />
      <VAlert title="Success" description="Mensagem de sucesso" variant="tonal" type="success" />
    </div>
  `,
});

export const AllVariants = ShowcaseTemplate.bind({});
AllVariants.storyName = 'Todas as Variações';
AllVariants.parameters = {
  controls: { disable: true },
};
