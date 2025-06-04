import { CreditScore } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";

// Muestra un mensaje de éxito al completar el pago
export default function PaymentDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogContent
        sx={{
          height: "75vh",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h2" color="success" align="center" gutterBottom>
          <b>Pago completado exitosamente.</b><br />
          Gracias por su compra.
        </Typography>
        <CreditScore color="success" sx={{ fontSize: 100 }} />
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" color="success" size="large" onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}