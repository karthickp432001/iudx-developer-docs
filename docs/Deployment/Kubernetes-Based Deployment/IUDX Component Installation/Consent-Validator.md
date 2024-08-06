---
sidebar_position: 23
---



1. The dmp-apdschema created using flyway using following steps:

    1. Port forward the pgpool (postgres proxy) on one terminal
    
        ```
        kubectl port-forward -n postgres svc/psql-postgresql-ha-pgpool 5432
        ```

    2. In another terminal, 
        
        ```
        git clone -b dx-5.0-compatible-branch-w-old-artifacts https://github.com/datakaveri/consent-manager.git && cd consent-manage
        ```

    3. The flyway.conf must be updated with the required data. which will be as follows

        ```
        fflyway.url=jdbc:postgresql://127.0.0.1:5432/iudx_auth
        flyway.user=postgres
        flyway.password=3DeM44CRyxZzBIJIeAkp3guyOWnGH5
        flyway.schemas=consent_stg
        flyway.placeholders.apdUser=iudx_auth_user
        flyway.cleanDisabled=true
        ```

    4. After this, the info command can be run to test the config.

        ```
        mvn flyway:info -Dflyway.configFiles=flyway.conf
        ```

    5. Then, the migrate command can be run to set up the database.
        
        ```
        mvn flyway:migrate -Dflyway.configFiles=flyway.conf
        ```

2. Navigate to the **[directory](https://github.com/datakaveri/iudx-deployment/tree/5.0.0/K8s-deployment/Charts/onboarding-server)**:

    ```
    cd iudx-deployment/K8s-deployment/Charts/consent-validator
    ```
3. Navigate to `secrets` directory

    ```
    cp -r example-secrets/secrets/ secrets/
    cd iudx-deployment/K8s-deployment/Charts/consent-validator/secrets
    ```

    1. Provide a correct config file (secrets/config.json) for bringing up consent-validator server. Substitute appropriate placeholders. 
    2. Configure the secrets/.cv.env file with appropriate values with  placeholders 

4. Define appropriate values of resources in `resource-values.yaml` 
    
    ```
     cp xample-aws-resource-values.yaml resource-values.yaml
    ```

5. To install geoserver on the k8s cluster, run the install script using the following command:

    ```
    ./install.sh 
    ```
    1. Creates namespace consent on K8s
    2. Creates required configmap and secrets on K8s.

- To check if the geoserver pods are deployed and running: 

    ```
    kubectl get pods -n consent
    ```



