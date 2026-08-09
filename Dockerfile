ARG NODE_VERSION=24.19.0
ARG PNPM_VERSION=11.20.0
ARG CADDY_VERSION=2.11.4


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


FROM caddy:${CADDY_VERSION}-alpine

# Copy the Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Attempt to load the /login page as a healthcheck
HEALTHCHECK --timeout=1s \
    CMD curl -sfL -o /dev/null http://localhost:8000/login

# Copy the files from the builder
COPY --from=builder /app/.output/public /srv
