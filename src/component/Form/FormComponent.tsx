import { Dialog, DialogTitle } from "@mui/material";
import type { ReactNode } from "react";

interface FormComponentProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function FormComponent({ open, onClose, title, children }: FormComponentProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

export default FormComponent;
