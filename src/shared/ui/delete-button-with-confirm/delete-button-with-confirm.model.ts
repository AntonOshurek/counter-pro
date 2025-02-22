interface DeleteButtonWithConfirmProps {
  deleteAction: () => void;
  confirmText: {
    title: string;
    body: string;
  };
  buttonText: string
}

export { DeleteButtonWithConfirmProps };
