#!/bin/bash
# Script de déploiement Flash Service sur Ubuntu/Debian
# Exécuter en root sur le serveur 167.172.166.107
# Usage: bash deploy.sh

set -e

DOMAIN="flashservice.org"
SITE_DIR="/var/www/flashservice"
REPO_URL="https://github.com/Faleryo/flash-service.git"

echo "=== Déploiement Flash Service ==="

# 1. Mise à jour du système
apt-get update -qq
apt-get install -y nginx git certbot python3-certbot-nginx

# 2. Clonage du repo
if [ -d "$SITE_DIR" ]; then
  echo "Mise à jour du repo existant..."
  cd "$SITE_DIR" && git pull origin main
else
  echo "Clonage du repo..."
  git clone "$REPO_URL" "$SITE_DIR"
fi

# 3. Permissions
chown -R www-data:www-data "$SITE_DIR"
chmod -R 755 "$SITE_DIR"

# 4. Config nginx
cat > /etc/nginx/sites-available/flashservice.org <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name flashservice.org;

    root /var/www/flashservice;
    index index.html;

    # Compression
    gzip on;
    gzip_types text/html text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;

    # Cache assets statiques
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Réécriture propre des URLs
    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Sécurité de base
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
NGINX

# 5. Activer le site
ln -sf /etc/nginx/sites-available/flashservice.org /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# 6. Test et reload nginx
nginx -t && systemctl reload nginx

echo ""
echo "=== Site HTTP en ligne : http://$DOMAIN ==="
echo ""
echo "=== Installation du certificat SSL (HTTPS) ==="
certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --redirect -m admin@flashservice.org

echo ""
echo "=== Terminé ! Site disponible sur https://$DOMAIN ==="
