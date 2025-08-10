# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy the website files from the current directory to the Nginx server directory
COPY . /usr/share/nginx/html

# Expose port 80 to be accessible from the host
EXPOSE 80

# Run Nginx in the foreground to keep the container alive
CMD ["nginx", "-g", "daemon off;"]
