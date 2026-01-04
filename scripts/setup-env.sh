#!/bin/bash

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cat > .env << 'EOF'
DATABASE_URL="file:./dev.db"
EOF
    echo ".env file created successfully!"
else
    echo ".env file already exists, skipping creation."
fi
