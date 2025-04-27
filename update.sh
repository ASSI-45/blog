# git pull origin main

sudo docker stop assi-45:1.0.0

sudo docker build -t assi-45:1.0.0 .

sudo docker run -d -p 3000:3000 assi-45:1.0.0

sudo docker ps