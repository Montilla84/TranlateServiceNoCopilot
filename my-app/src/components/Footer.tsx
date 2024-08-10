import React from 'react';
import { Box, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', p: 4 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Servicios</Typography>
          <ul>
            <li><MuiLink href="#" color="inherit">Consultoría</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Soporte</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Implementación</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Formación</MuiLink></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Formas de pago</Typography>
          <ul>
            <li><MuiLink href="#" color="inherit">Visa</MuiLink></li>
            <li><MuiLink href="#" color="inherit">MasterCard</MuiLink></li>
            <li><MuiLink href="#" color="inherit">PayPal</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Transferencia bancaria</MuiLink></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Sobre la compañía</Typography>
          <ul>
            <li><MuiLink href="#" color="inherit">Nuestra historia</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Misión y visión</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Carreras</MuiLink></li>
            <li><MuiLink href="#" color="inherit">Contacto</MuiLink></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Síguenos</Typography>
          <IconButton color="inherit" href="https://www.linkedin.com">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.youtube.com">
            <YouTubeIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.whatsapp.com">
            <WhatsAppIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.telegram.org">
            <TelegramIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © Inter Agr Systems
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <MuiLink href="#" color="inherit">Política de privacidad</MuiLink> | 
          <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>Política de cookies</MuiLink> | 
          <MuiLink href="#" color="inherit">Configuración de cookies</MuiLink> | 
          <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>Términos y condiciones</MuiLink> | 
          <MuiLink href="#" color="inherit">Política de divulgación responsable</MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
