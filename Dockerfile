# Pull from docker hub
FROM node:20-alpine

# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Copy the rest of the application code
COPY . /server


# Install dependencies
RUN npm install

# Build the application for production
#RUN npm run build

# Expose the port your application runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]