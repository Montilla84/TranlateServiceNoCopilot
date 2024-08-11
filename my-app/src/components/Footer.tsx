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
                    <Typography variant="h6">Services</Typography>
                    <ul>
                        <li><MuiLink href="#" color="inherit">Consulting</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Support</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Implementation</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Training</MuiLink></li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6">Payment Methods</Typography>
                    <ul>
                        <li><MuiLink href="#" color="inherit">Visa</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">MasterCard</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">PayPal</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Bank Transfer</MuiLink></li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6">About the Company</Typography>
                    <ul>
                        <li><MuiLink href="#" color="inherit">Our History</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Mission and Vision</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Careers</MuiLink></li>
                        <li><MuiLink href="#" color="inherit">Contact</MuiLink></li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6">Follow Us</Typography>
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
                    <MuiLink href="#" color="inherit">Privacy Policy</MuiLink> |
                    <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>Cookie Policy</MuiLink> |
                    <MuiLink href="#" color="inherit">Cookie Settings</MuiLink> |
                    <MuiLink href="#" color="inherit" sx={{ mx: 1 }}>Terms and Conditions</MuiLink> |
                    <MuiLink href="#" color="inherit">Responsible Disclosure Policy</MuiLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
