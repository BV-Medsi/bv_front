import { CHAR_NO_BREAK_SPACE } from '@smartmed/utility/consts';
import { VNode } from 'vue';

export const emptyStateTypeToText: Record<string, string> = {
  analysis: `На${CHAR_NO_BREAK_SPACE}ближайшее время анализов\nне${CHAR_NO_BREAK_SPACE}запланировано`,
  appointment: `На${CHAR_NO_BREAK_SPACE}ближайшее время приёмов\nне${CHAR_NO_BREAK_SPACE}запланировано`,
  basket: `Корзина пока пуста`,
  cards: `Привяжите банковскую карту, чтобы оплачивать консультации`,
  clinics: `Мы${CHAR_NO_BREAK_SPACE}не${CHAR_NO_BREAK_SPACE}смогли найти клиники.\nПопробуйте обновить страницу`,
  documents: `Здесь будут храниться все ваши\nдокументы из${CHAR_NO_BREAK_SPACE}истории консультаций\nс${CHAR_NO_BREAK_SPACE}врачами`,
  family: `Добавьте данные ваших близких,\nчтобы заботиться об${CHAR_NO_BREAK_SPACE}их${CHAR_NO_BREAK_SPACE}здоровье`,
  notifications: `Уведомлений ещё нет`,
  orders: `Пока нет заказов`,
  referrals: `Врачи пока не${CHAR_NO_BREAK_SPACE}назначили\nвам направлений`,
  support: `Здесь будут ваши обращения\nв${CHAR_NO_BREAK_SPACE}техническую поддержку`,
};

export type EmptyStateProps = {
  type?:
    | 'analysis'
    | 'appointment'
    | 'basket'
    | 'cards'
    | 'clinics'
    | 'documents'
    | 'family'
    | 'notifications'
    | 'orders'
    | 'referrals'
    | 'support'
    | string;

  text?: string;

  src?: string;
};

export type EmptyStateSlots = {
  picture?: (props: {}) => ReadonlyArray<VNode>;

  text?: (props: {}) => ReadonlyArray<VNode>;
};

export const EmptyStateDefaultProps = {
  text: '',
  type: 'appointment',
  src: '',
} as const;
