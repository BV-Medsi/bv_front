import { PopupEmits, PopupProps } from '../Popup/Popup.props';

export type PdfViewerProps = PopupProps & {
  src?: string | null;

  isLoading?: boolean;
};

export type PdfViewerEmits = PopupEmits;
