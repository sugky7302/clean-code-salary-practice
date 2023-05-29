FROM node:20
SHELL ["/bin/bash", "-c"]

# 安裝 plantuml 需要的套件
## 安裝 java & graphviz
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk ca-certificates-java graphviz && \
    apt-get clean && \
    update-ca-certificates -f
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64/

WORKDIR /src
COPY . .
RUN npm install -g pnpm
ENV PNPM_HOME="/usr/local/lib/node_modules/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm config set global-bin-dir "/usr/local/lib/node_modules/pnpm"
RUN pnpm install

CMD ["tail", "-f", "/dev/null"]