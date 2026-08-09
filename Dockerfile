ARG NODE_VERSION=24.19.0
ARG PNPM_VERSION=11.20.0
ARG NGINX_VERSION=1.31.3


FROM ghcr.io/pnpm/pnpm:${PNPM_VERSION} AS builder

# Set the working directory
WORKDIR /app

# Set Nuxt configuration
ENV NODE_ENV=production

# Install Node.js
RUN --mount=type=cache,target=/pnpm/store \
    pnpm runtime set node ${NODE_VERSION} -g

# Install Node.js and project dependencies
RUN --mount=type=cache,target=/pnpm/store \
    --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    pnpm install --frozen-lockfile

# Copy the source files
COPY . .

# Generate .nuxt directory
RUN --mount=type=cache,target=/pnpm/store \
    pnpm nuxi prepare

# Generate OpenAPI files
RUN --mount=type=cache,target=/pnpm/store \
    pnpm openapi:generate

# Build the application
RUN --mount=type=cache,target=/pnpm/store \
    pnpm generate


FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}-alpine

# Copy the Nginx configuration file
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Copy the files from the builder
COPY --from=builder --chown=nginx:nginx /app/.output/public /usr/share/nginx/html
