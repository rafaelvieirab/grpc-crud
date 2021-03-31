FROM envoyproxy/envoy:latest
RUN apt-get update
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml


# FROM envoyproxy/envoy:v1.15.0
# COPY envoy.yaml /etc/envoy/envoy.yaml
# CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /dev/stdout

# FROM envoyproxy/envoy-dev:latest
# COPY ./envoy.yaml /etc/envoy/envoy.yaml
# CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log