---
sidebar_position: 2
---



+ It acts as reverse proxy doing TLS termination, rate limiting for all (HTTP) public/outward facing IUDX endpoints

+ Nginx will be deployed using stack yaml files.

+ It does proxy for catalogue server, resource server (rs), AAA (Authorization, Authentication and Accounting), grafana and kibana.

### Prerequisite

1. Need DNS provider credentials of the domain  to add TXT record for  Let’s Encrypt Certificate generation

### Installation

1. Navigate to the below directory 
    ```
    cd iudx-deployment/Docker-Swarm-deployment/single-node/nginx/
    ```
  

   2. Assign the node label if not assigned during swarm installation using: 

   ```
   docker node update --label-add nginx-node=true <node_name> 
    ```
   

   3. Make a copy of example-configs directory:

    ```
    cp -r example-configs/conf . 
    ```

   ****
4. Make a copy of example-secrets directory:

   
    ```
   cp -r example-secrets/secrets . 
   ```

5. For each nginx server configuration in conf/ direcotory that would be used (some of the config might not be used for particular deployment, in that case no need to do any changes for those configs and also no changes for error.conf, default.conf file), substitute appropriate domain name next to `server_name` directive and path of certificates (by default points to self signed certificates)<br/> For example:- If cos domain is `cos-domain.iudx.org` , then substitute it in conf/cos.conf as follows

    <div class="boxBorder">

    **server_name**          &nbsp;&nbsp;&nbsp;&nbsp;cos-domain.iudx.org;<br/>
    **ssl_certificate**      &nbsp;&nbsp;&nbsp;&nbsp;/etc/nginx/certs/cos-domain.iudx.org/cert.pem;<br/>
    **ssl_certificate_key**  &nbsp;/etc/nginx/certs/cos-domain.iudx.org/key.pem; 
    </div>  
    <br/>
6. For each domain that needs a certificate generated, add domain names in \[conf/acme-config.json] (./example-configs/conf/acme-config.json) 
    <br/>Example:-  

                                                                                  
   | {"hostnames": [ <br/>    "cos-domain.iudx.org",  <br/>   "databroker-domain.iudx.org"]} |
    | ------------------------------------------------------------------------------ |


   

:::note
**If this needs to be tried on a local machine, you can use self signed certificates (default-ssl) and not generate certificates through acme by putting an empty array for hostnames in acme-config.json.**
:::

7. Define Appropriate values of resources in in `nginx-stack.resources.yaml` for nginx as shown in sample resource-values file **[example-nginx-stack.resources.yaml](https://github.com/datakaveri/iudx-deployment/blob/5.0.0/Docker-Swarm-deployment/single-node/nginx/example-nginx-stack.resources.yaml)**

      - CPU requests and limits

      - RAM requests and limits

      - PID limit



8. Deploy nginx stack as follows: 

    ```  
    cp example-nginx-stack.resources.yaml nginx-stack.resources.yaml

    docker stack deploy -c nginx-stack.yaml -c nginx-stack.resources.yaml nginx-stack 
    ```
    - Nginx URL for respective service: **https://<service-domain-name\>**

    - For more information on installation instructions, refer **[here](https://github.com/datakaveri/iudx-deployment/tree/5.0.0/Docker-Swarm-deployment/single-node/nginx)**.

<details>
<summary><div class="test_color">Testing</div></summary>

#### To check if the nginx stacks are deployed and running use command:
```
docker stack ps nginx 
```
#### You can check any endpoint that the nginx handles. If the application server isn’t deployed then it throws an error of <div class="txt_color">`502: Bad Gateway`</div>
```
curl https://<api-serverdomain>/apis 
```
#### To check certificates are generated for all requested domains:
- Exec inside the nginx-acme container:

```
docker exec -it <nginx-container-id> /bin/bash
```
- Check cert status:
```
acme.sh –list
```
</details>