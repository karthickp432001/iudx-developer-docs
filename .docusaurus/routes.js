
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/new-page',
    component: ComponentCreator('/new-page','02b'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','f46'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','e93'),
    routes: [
      {
        path: '/docs/next/client-credentials',
        component: ComponentCreator('/docs/next/client-credentials','15b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer',
        component: ComponentCreator('/docs/next/Consumer/consumer','99e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_data_access_APIs',
        component: ComponentCreator('/docs/next/Consumer/consumer_data_access_APIs','fd2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_data_access_async',
        component: ComponentCreator('/docs/next/Consumer/consumer_data_access_async','5d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_data_access_file_server',
        component: ComponentCreator('/docs/next/Consumer/consumer_data_access_file_server','f8e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_data_access_subscription',
        component: ComponentCreator('/docs/next/Consumer/consumer_data_access_subscription','c84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_data_discovery',
        component: ComponentCreator('/docs/next/Consumer/consumer_data_discovery','1a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Consumer/consumer_obtaining_access_token',
        component: ComponentCreator('/docs/next/Consumer/consumer_obtaining_access_token','728'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Delegate/delegate',
        component: ComponentCreator('/docs/next/Delegate/delegate','a59'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Delegate/delegate_manage_policy',
        component: ComponentCreator('/docs/next/Delegate/delegate_manage_policy','bbb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Delegate/delegate_register_catalogue_item',
        component: ComponentCreator('/docs/next/Delegate/delegate_register_catalogue_item','ce5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Delegate/delegate_register_resource_server',
        component: ComponentCreator('/docs/next/Delegate/delegate_register_resource_server','149'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Deployment Overview',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Deployment Overview','199'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Centralised Nginx',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Centralised Nginx','b6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Monitoring stack',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Monitoring stack','59a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Provisioning Node-exporter and docker daemon metrics',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Addons/Provisioning Node-exporter and docker daemon metrics','a0e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Provisioning Docker Swarm with overlay network',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Provisioning Docker Swarm with overlay network','6c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Resource planning',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Infrastructure Provisioning/Resource planning','fe1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/Introduction',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/Introduction','a81'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/AAA Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/AAA Server','e4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/ACL -APD',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/ACL -APD','1c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Advance Monitoring Stack',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Advance Monitoring Stack','d37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/API Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/API Server','78e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Auditing Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Auditing Server','9cf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Catalogue-Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Catalogue-Server','9a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Data Ingestion Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Data Ingestion Server','b92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/ELK stack',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/ELK stack','979'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/File Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/File Server','429'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Immudb',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Immudb','3ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Initiating the Deployment',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Initiating the Deployment','5a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Keycloak',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Keycloak','77f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Latest Ingestion Pipeline',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Latest Ingestion Pipeline','f95'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/PostgreSQL',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/PostgreSQL','276'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/RabbitMQ',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/RabbitMQ','528'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Redis',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Redis','52a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Resource Server',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Resource Server','a07'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Zookeeper',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/IUDX Component Installation/Zookeeper','dbc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Docker Swarm Based Deployment/prerequisites',
        component: ComponentCreator('/docs/next/Deployment/Docker Swarm Based Deployment/prerequisites','59c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Deployment/Introduction',
        component: ComponentCreator('/docs/next/Deployment/Introduction','757'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Provider/provider',
        component: ComponentCreator('/docs/next/Provider/provider','8b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Provider/provider_manage_delegates',
        component: ComponentCreator('/docs/next/Provider/provider_manage_delegates','c4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Provider/provider_manage_policies',
        component: ComponentCreator('/docs/next/Provider/provider_manage_policies','4f1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Provider/provider_register_catalogue_item',
        component: ComponentCreator('/docs/next/Provider/provider_register_catalogue_item','5a4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Provider/provider_register_resource_server',
        component: ComponentCreator('/docs/next/Provider/provider_register_resource_server','9dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/registration',
        component: ComponentCreator('/docs/next/registration','c90'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','51f'),
    routes: [
      {
        path: '/docs/client-credentials',
        component: ComponentCreator('/docs/client-credentials','7f3'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer',
        component: ComponentCreator('/docs/Consumer/consumer','df6'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_access_APIs',
        component: ComponentCreator('/docs/Consumer/consumer_data_access_APIs','cfa'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_access_async',
        component: ComponentCreator('/docs/Consumer/consumer_data_access_async','453'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_access_file_server',
        component: ComponentCreator('/docs/Consumer/consumer_data_access_file_server','0c4'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_access_subscription',
        component: ComponentCreator('/docs/Consumer/consumer_data_access_subscription','69d'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_data_discovery',
        component: ComponentCreator('/docs/Consumer/consumer_data_discovery','95f'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Consumer/consumer_obtaining_access_token',
        component: ComponentCreator('/docs/Consumer/consumer_obtaining_access_token','87d'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate',
        component: ComponentCreator('/docs/Delegate/delegate','82d'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_manage_policy',
        component: ComponentCreator('/docs/Delegate/delegate_manage_policy','92b'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_register_catalogue_item',
        component: ComponentCreator('/docs/Delegate/delegate_register_catalogue_item','02e'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Delegate/delegate_register_resource_server',
        component: ComponentCreator('/docs/Delegate/delegate_register_resource_server','50c'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/Deployment Overview',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/Deployment Overview','191'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/Introduction',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/Introduction','1de'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/AAA Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/AAA Server','85e'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/ACL-APD',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/ACL-APD','462'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Advance Monitoring Stack',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Advance Monitoring Stack','a8c'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/API Server','973'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Auditing Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Auditing Server','57a'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Catalogue-Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Catalogue-Server','3af'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Data- Ingestion Server','258'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/ELK stack',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/ELK stack','04e'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/File Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/File Server','050'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/GIS-Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/GIS-Server','19c'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Immudb',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Immudb','292'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Initiating the Deployment',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Initiating the Deployment','ebd'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Keycloak',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Keycloak','900'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Latest-Ingestion-Pipeline',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Latest-Ingestion-Pipeline','ae7'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/PostgreSQL',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/PostgreSQL','5ba'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ','150'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Redis','1db'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Resource-Server',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Resource-Server','92b'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Zookeeper',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Zookeeper','c74'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Docker Swarm-Based Deployment/prerequisites',
        component: ComponentCreator('/docs/Deployment/Docker Swarm-Based Deployment/prerequisites','23d'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Deployment/Introduction',
        component: ComponentCreator('/docs/Deployment/Introduction','7af'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider',
        component: ComponentCreator('/docs/Provider/provider','77b'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_manage_delegates',
        component: ComponentCreator('/docs/Provider/provider_manage_delegates','06a'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_manage_policies',
        component: ComponentCreator('/docs/Provider/provider_manage_policies','d31'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_register_catalogue_item',
        component: ComponentCreator('/docs/Provider/provider_register_catalogue_item','39f'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/Provider/provider_register_resource_server',
        component: ComponentCreator('/docs/Provider/provider_register_resource_server','f28'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      },
      {
        path: '/docs/registration',
        component: ComponentCreator('/docs/registration','8f2'),
        exact: true,
        'sidebar': "version-5.0.0/tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
