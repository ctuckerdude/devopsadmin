FROM java:8
EXPOSE 8200:8200
EXPOSE 8500:8500
ADD target/admin-0.0.1-SNAPSHOT.jar admin.jar
ENTRYPOINT ["java", "-jar", "admin.jar"]