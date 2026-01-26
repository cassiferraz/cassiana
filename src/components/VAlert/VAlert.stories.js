import VAlert from './VAlert.vue';

/**
 * VAlert - Componente de alerta customizado baseado no v-alert do Vuetify 2
 *
 * Suporta três variantes visuais (outlined, filled, tonal) e quatro tipos
 * de mensagem (error, warning, info, success).
 */
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
      description: 'Nome do ícone Material Icons (opcional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ícone padrão do tipo' },
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
      description: 'Tipo de alerta (define cor e ícone padrão)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
  },
  args: {
    title: 'Título do Alerta',
    description: '',
    icon: '',
    dismissible: false,
    variant: 'outlined',
    type: 'info',
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente VAlert é um wrapper customizado do v-alert do Vuetify 2 que oferece:

- **3 variantes visuais**: outlined (borda colorida), filled (fundo sólido), tonal (fundo suave)
- **4 tipos de mensagem**: error, warning, info, success
- **Ícones padrão** para cada tipo
- **Opção dismissible** para permitir fechar o alerta

### Ícones Padrão
- error: warning (triângulo)
- warning: error_outline (exclamação)
- info: info (i)
- success: check_circle (check)
        `,
      },
    },
  },
};

// ============================================================================
// STORY BASE - Controles Interativos
// ============================================================================

/**
 * Story padrão com controles interativos para todas as props
 */
export const Playground = {
  args: {
    title: 'Título do Alerta',
    description: 'Esta é uma descrição opcional que fornece mais detalhes sobre o alerta.',
    variant: 'outlined',
    type: 'info',
    dismissible: false,
  },
};

// ============================================================================
// VARIAÇÕES POR TIPO - OUTLINED
// ============================================================================

/**
 * Alerta de erro com estilo outlined (borda colorida, fundo claro)
 */
export const OutlinedError = {
  args: {
    title: 'Erro ao processar',
    description: 'Ocorreu um erro ao processar sua solicitação. Tente novamente.',
    variant: 'outlined',
    type: 'error',
  },
};

/**
 * Alerta de aviso com estilo outlined
 */
export const OutlinedWarning = {
  args: {
    title: 'Atenção necessária',
    description: 'Sua sessão expirará em 5 minutos. Salve seu trabalho.',
    variant: 'outlined',
    type: 'warning',
  },
};

/**
 * Alerta informativo com estilo outlined
 */
export const OutlinedInfo = {
  args: {
    title: 'Informação importante',
    description: 'O sistema estará em manutenção no próximo domingo.',
    variant: 'outlined',
    type: 'info',
  },
};

/**
 * Alerta de sucesso com estilo outlined
 */
export const OutlinedSuccess = {
  args: {
    title: 'Operação concluída',
    description: 'Seus dados foram salvos com sucesso.',
    variant: 'outlined',
    type: 'success',
  },
};

// ============================================================================
// VARIAÇÕES POR TIPO - FILLED
// ============================================================================

/**
 * Alerta de erro com estilo filled (fundo sólido, texto branco)
 */
export const FilledError = {
  args: {
    title: 'Erro crítico',
    description: 'Não foi possível conectar ao servidor. Verifique sua conexão.',
    variant: 'filled',
    type: 'error',
  },
};

/**
 * Alerta de aviso com estilo filled
 */
export const FilledWarning = {
  args: {
    title: 'Aviso importante',
    description: 'Você está prestes a excluir dados permanentemente.',
    variant: 'filled',
    type: 'warning',
  },
};

/**
 * Alerta informativo com estilo filled
 */
export const FilledInfo = {
  args: {
    title: 'Nova funcionalidade',
    description: 'Confira as novidades da última atualização do sistema.',
    variant: 'filled',
    type: 'info',
  },
};

/**
 * Alerta de sucesso com estilo filled
 */
export const FilledSuccess = {
  args: {
    title: 'Cadastro realizado',
    description: 'Bem-vindo! Sua conta foi criada com sucesso.',
    variant: 'filled',
    type: 'success',
  },
};

// ============================================================================
// VARIAÇÕES POR TIPO - TONAL
// ============================================================================

/**
 * Alerta de erro com estilo tonal (fundo suave, sem borda)
 */
export const TonalError = {
  args: {
    title: 'Campos inválidos',
    description: 'Por favor, corrija os erros destacados no formulário.',
    variant: 'tonal',
    type: 'error',
  },
};

/**
 * Alerta de aviso com estilo tonal
 */
export const TonalWarning = {
  args: {
    title: 'Dados não salvos',
    description: 'Você possui alterações não salvas. Deseja continuar?',
    variant: 'tonal',
    type: 'warning',
  },
};

/**
 * Alerta informativo com estilo tonal
 */
export const TonalInfo = {
  args: {
    title: 'Dica do dia',
    description: 'Use atalhos de teclado para aumentar sua produtividade.',
    variant: 'tonal',
    type: 'info',
  },
};

/**
 * Alerta de sucesso com estilo tonal
 */
export const TonalSuccess = {
  args: {
    title: 'Upload concluído',
    description: 'Todos os arquivos foram enviados com sucesso.',
    variant: 'tonal',
    type: 'success',
  },
};

// ============================================================================
// COM E SEM DESCRIÇÃO
// ============================================================================

/**
 * Alerta apenas com título, sem descrição
 */
export const SemDescricao = {
  args: {
    title: 'Operação concluída com sucesso!',
    description: '',
    variant: 'filled',
    type: 'success',
  },
};

/**
 * Alerta com título e descrição longa
 */
export const ComDescricaoLonga = {
  args: {
    title: 'Atualização do Sistema',
    description:
      'Uma nova versão do sistema está disponível. Esta atualização inclui correções de segurança importantes, melhorias de desempenho e novas funcionalidades. Recomendamos que você atualize o mais breve possível para garantir a melhor experiência.',
    variant: 'outlined',
    type: 'info',
  },
};

// ============================================================================
// COM E SEM ÍCONE CUSTOMIZADO
// ============================================================================

/**
 * Alerta usando ícone padrão do tipo (info)
 */
export const IconePadrao = {
  args: {
    title: 'Usando ícone padrão',
    description: 'Este alerta usa o ícone padrão definido para o tipo "info".',
    variant: 'outlined',
    type: 'info',
    icon: '',
  },
};

/**
 * Alerta com ícone customizado (Material Icons)
 */
export const IconeCustomizado = {
  args: {
    title: 'Ícone personalizado',
    description: 'Este alerta usa um ícone customizado (notifications).',
    variant: 'outlined',
    type: 'info',
    icon: 'notifications',
  },
};

/**
 * Alerta de erro com ícone customizado
 */
export const ErroComIconeCustomizado = {
  args: {
    title: 'Conexão perdida',
    description: 'Verifique sua conexão com a internet.',
    variant: 'filled',
    type: 'error',
    icon: 'wifi_off',
  },
};

/**
 * Alerta de sucesso com ícone customizado
 */
export const SucessoComIconeCustomizado = {
  args: {
    title: 'Pagamento aprovado',
    description: 'Seu pagamento foi processado com sucesso.',
    variant: 'tonal',
    type: 'success',
    icon: 'payment',
  },
};

// ============================================================================
// DISMISSIBLE (FECHÁVEL)
// ============================================================================

/**
 * Alerta que pode ser fechado pelo usuário
 */
export const Dismissible = {
  args: {
    title: 'Notificação fechável',
    description: 'Clique no X para fechar este alerta.',
    variant: 'outlined',
    type: 'info',
    dismissible: true,
  },
};

/**
 * Alerta de erro fechável
 */
export const DismissibleError = {
  args: {
    title: 'Erro temporário',
    description: 'Este erro pode ser ignorado clicando no X.',
    variant: 'filled',
    type: 'error',
    dismissible: true,
  },
};

/**
 * Alerta de sucesso fechável
 */
export const DismissibleSuccess = {
  args: {
    title: 'Arquivo salvo!',
    description: 'Seu documento foi salvo automaticamente.',
    variant: 'tonal',
    type: 'success',
    dismissible: true,
  },
};

// ============================================================================
// GALERIA DE TODAS AS COMBINAÇÕES
// ============================================================================

/**
 * Template para renderizar múltiplos alertas
 */
const AllVariantsTemplate = (args, { argTypes }) => ({
  components: { VAlert },
  props: Object.keys(argTypes),
  template: `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <h3 style="margin: 0 0 8px 0; color: #666;">Outlined</h3>
      <VAlert title="Error - Outlined" description="Mensagem de erro" variant="outlined" type="error" />
      <VAlert title="Warning - Outlined" description="Mensagem de aviso" variant="outlined" type="warning" />
      <VAlert title="Info - Outlined" description="Mensagem informativa" variant="outlined" type="info" />
      <VAlert title="Success - Outlined" description="Mensagem de sucesso" variant="outlined" type="success" />

      <h3 style="margin: 16px 0 8px 0; color: #666;">Filled</h3>
      <VAlert title="Error - Filled" description="Mensagem de erro" variant="filled" type="error" />
      <VAlert title="Warning - Filled" description="Mensagem de aviso" variant="filled" type="warning" />
      <VAlert title="Info - Filled" description="Mensagem informativa" variant="filled" type="info" />
      <VAlert title="Success - Filled" description="Mensagem de sucesso" variant="filled" type="success" />

      <h3 style="margin: 16px 0 8px 0; color: #666;">Tonal</h3>
      <VAlert title="Error - Tonal" description="Mensagem de erro" variant="tonal" type="error" />
      <VAlert title="Warning - Tonal" description="Mensagem de aviso" variant="tonal" type="warning" />
      <VAlert title="Info - Tonal" description="Mensagem informativa" variant="tonal" type="info" />
      <VAlert title="Success - Tonal" description="Mensagem de sucesso" variant="tonal" type="success" />
    </div>
  `,
});

/**
 * Galeria com todas as 12 combinações de variant x type
 */
export const TodasVariacoes = AllVariantsTemplate.bind({});
TodasVariacoes.parameters = {
  controls: { disable: true },
  docs: {
    description: {
      story: 'Exibe todas as 12 combinações possíveis de variant (outlined, filled, tonal) e type (error, warning, info, success).',
    },
  },
};

// ============================================================================
// CASOS DE USO REAIS
// ============================================================================

/**
 * Exemplo de formulário com erro de validação
 */
export const ErroValidacaoFormulario = {
  args: {
    title: 'Erro de validação',
    description: 'O campo "Email" deve conter um endereço de email válido.',
    variant: 'tonal',
    type: 'error',
    icon: 'email',
  },
};

/**
 * Exemplo de notificação de sistema
 */
export const NotificacaoSistema = {
  args: {
    title: 'Manutenção programada',
    description: 'O sistema ficará indisponível no dia 15/02 das 02:00 às 06:00 para manutenção.',
    variant: 'outlined',
    type: 'warning',
    icon: 'schedule',
    dismissible: true,
  },
};

/**
 * Exemplo de confirmação de ação
 */
export const ConfirmacaoAcao = {
  args: {
    title: 'Item adicionado ao carrinho',
    description: 'Continue comprando ou finalize seu pedido.',
    variant: 'filled',
    type: 'success',
    icon: 'shopping_cart',
    dismissible: true,
  },
};
