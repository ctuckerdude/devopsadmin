# DevopsAdmin
The DevopsAdmin app is intended to provide a basis for functionality related to Devops activities.
The application has been implemented as a Microservice using Spring Boot, Spring Cloud components 
and Angular JS 4, incorporating the SB-Admin Angular JS 4 Template 
(https://startangular.com/product/sb-admin-bootstrap-4-angular-4/). 

The initial functionality consists of displaying health information for all services registered with
with a Service Discovery Broker. More Devops functions will be included in future releases.
HashiCorp Consul, https://www.consul.io/, was used for Service Discovery.
A DockerFile and instructions are included to deploy as a docker container.

For licencing and distribution please consult the licences: 
1. https://github.com/start-angular/SB-Admin-BS4-Angular-4/blob/master/LICENSE
2. https://github.com/hashicorp/consul/blob/master/LICENSE


**Angular Requirements**: angular-v4.2.4, angular/cli-v1.1.3

**Installation and building frontend**
1. Open terminal in src/frontend
2. Run: npm install
3. To develop and test ui, start server: npm start
4. Once development of ui complete, build prod release: npm run build
   The prod distribution will be deployed to src/main/resources/static 

**Building and running the Microservice**
1. Install consul docker image
2. Start consul using the following command:
docker run -d --net=host consul agent -server -ui -bind="IP" -client="0.0.0.0" -bootstrap-expect="1"
where IP is the ip of the Virtual Host running the Docker Machine, e.g. 192.168.90.1
Consul will now be running on port 8500
3. Setup port forwarding on you Virtual Host so that localhost:8500 maps to 192.168.90.1:8500
4. Check that Consul is running, localhost:8500/ui
5. Run the maven install target
6. Start the service by running spring-boot:run, the service will start on port 8300
7. Open the app, localhost:3000. The SB Admin template will be loaded, showing the 
   Dashboard page. The top table in the Dashboard pages display the rendered custom
   component: HealthInfoComponent, which retrieves health info for all services registered with 
   Connsul.

**Build a run as Docker Container**
1. Build and install the Docker image e.g by using the Intellij Docker plugin
2. Start the Docker container:
docker run -d --net=host devopsadmin -bind="IP"
where IP is the ip of the Virtual Host running the Docker Machine, e.g. 192.168.90.1
3. Setup port forwarding on you Virtual Host so that localhost:8300 maps to 192.168.90.1:8300
4. Navigate to localhost:8300 
