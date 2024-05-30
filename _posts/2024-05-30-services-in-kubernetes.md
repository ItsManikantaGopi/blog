---
layout: post
title: "Services in Kubernetes"
show-img: true
mermaid: true
#thumbnail-img: /assets/img/hello_world.jpeg
tags: [Kubernetes, DevOps, Containers]
---


Why do we need services in Kubernetes?

Lets say you have a pod running a web server and you want to access it from outside the cluster. You can't access the pod directly because pods are ephemeral and can be created and destroyed at any time. Instead, you need a stable endpoint that can route traffic to the pod even if it gets rescheduled or replaced.

As it is being healed, the pod's ip address will change. So, you need a stable endpoint that can route traffic to the pod even if it gets rescheduled or replaced. This is where services come in.

Service will act as load balancer for the deployment (group of pods) and will route the traffic to the pods. It will make use of the kubeproxy to route the traffic to the pods.



Sevice will solve the problem of 

- Loadbalancing over the deployment. 
- Service discovery, which will be solved based on the labels and selectors, meta data will be used to store the labels in metadata of the deployment yaml.
- Expose to the external world.


Exposing the service to the external world can be done in multiple ways.
YAML file can be used to expose the service to the external world. 

- ClusterIP: Exposes the service on a cluster-internal IP. Choosing this value makes the service only reachable from within the cluster. This is the default ServiceType.

- NodePort: Exposes the service on each Node’s IP at a static port (the NodePort). A ClusterIP service, to which the NodePort service will route, is automatically created. You’ll be able to contact the NodePort service, from outside the cluster, by requesting <NodeIP>:<NodePort>.

- LoadBalancer: Exposes the service externally using a cloud provider’s load balancer. NodePort and ClusterIP services, to which the external load balancer will route, are automatically created.


LoadBalancer won't work in minikube, as it is a local cluster. 

LoadBalancer will require ingress controller to be installed in the cluster.

Kubelet will deploy a pod on to the one of the worker node.


What is Ingress?

Ingress solves path based routing so that instead of using multiple load balancers, we can use a single load balancer and route the traffic based on the path.

As each load balancer will have a cost associated with it, it is better to use a single load balancer and route the traffic based on the path. Cost for the public ip address from the cloud provider.

Ingress will have a set of rules that will route the traffic based on the path.

Ingress controller will be created by the load balancer companies to support different functionalities over the ingress.









